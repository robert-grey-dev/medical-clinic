-- Enable required extension (usually present)
create extension if not exists pgcrypto with schema public;

-- 1) Enum for review status
create type public.review_status as enum ('pending', 'approved', 'rejected');

-- 2) Doctors table
create table public.doctors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  specialty text not null,
  experience_years integer,
  average_rating numeric(3,2) not null default 0,
  total_reviews integer not null default 0,
  description text,
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3) Reviews table
create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid not null references public.doctors(id) on delete cascade,
  patient_name text not null,
  email text not null,
  rating integer not null check (rating between 1 and 5),
  review_text text not null check (char_length(review_text) between 10 and 2000),
  status public.review_status not null default 'pending',
  created_at timestamptz not null default now()
);

-- Helpful indexes
create index idx_reviews_doctor on public.reviews(doctor_id);
create index idx_reviews_status on public.reviews(status);
create index idx_reviews_doctor_status_approved on public.reviews(doctor_id, status) where status = 'approved';

-- RLS
alter table public.doctors enable row level security;
alter table public.reviews enable row level security;

-- Policies
create policy "Doctors are viewable by everyone"
  on public.doctors for select
  using (true);

create policy "Approved reviews are viewable by everyone"
  on public.reviews for select
  using (status = 'approved');

create policy "Anyone can submit a review"
  on public.reviews for insert
  to anon, authenticated
  with check (rating between 1 and 5);

-- Utility trigger to keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_doctors_set_updated_at
before update on public.doctors
for each row execute function public.set_updated_at();

-- Rating recalculation
create or replace function public.recalculate_doctor_rating(_doctor_id uuid)
returns void as $$
begin
  update public.doctors d
  set 
    average_rating = coalesce(
      (select round(avg(r.rating)::numeric, 2)
       from public.reviews r
       where r.doctor_id = d.id and r.status = 'approved'),
      0
    ),
    total_reviews = (
      select count(*) from public.reviews r
      where r.doctor_id = d.id and r.status = 'approved'
    ),
    updated_at = now()
  where d.id = _doctor_id;
end;
$$ language plpgsql;

-- Trigger to handle reviews changes
create or replace function public.handle_review_change()
returns trigger as $$
begin
  if tg_op = 'INSERT' then
    if new.status = 'approved' then
      perform public.recalculate_doctor_rating(new.doctor_id);
    end if;
    return new;
  elsif tg_op = 'UPDATE' then
    if (old.doctor_id is distinct from new.doctor_id)
       or (old.status is distinct from new.status)
       or (old.rating is distinct from new.rating) then
      if old.status = 'approved' then
        perform public.recalculate_doctor_rating(old.doctor_id);
      end if;
      if new.status = 'approved' then
        perform public.recalculate_doctor_rating(new.doctor_id);
      end if;
    end if;
    return new;
  elsif tg_op = 'DELETE' then
    if old.status = 'approved' then
      perform public.recalculate_doctor_rating(old.doctor_id);
    end if;
    return old;
  end if;
  return null;
end;
$$ language plpgsql;

create trigger trg_reviews_after_insert
after insert on public.reviews
for each row execute function public.handle_review_change();

create trigger trg_reviews_after_update
after update on public.reviews
for each row execute function public.handle_review_change();

create trigger trg_reviews_after_delete
after delete on public.reviews
for each row execute function public.handle_review_change();