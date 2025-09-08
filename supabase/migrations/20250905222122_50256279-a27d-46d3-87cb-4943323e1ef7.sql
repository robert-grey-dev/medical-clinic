-- Fix linter: set explicit search_path for all custom functions
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql set search_path = public;

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
$$ language plpgsql set search_path = public;

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
$$ language plpgsql set search_path = public;