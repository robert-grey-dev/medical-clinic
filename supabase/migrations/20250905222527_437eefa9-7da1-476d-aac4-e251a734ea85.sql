-- Populate with sample doctors from your existing data
insert into public.doctors (name, specialty, experience_years, description, image_url) values
  ('Александр Иванов', 'Кардиология', 15, 'Врач-кардиолог высшей категории с опытом работы более 15 лет. Специализируется на лечении сердечно-сосудистых заболеваний', '/placeholder.svg'),
  ('Мария Петрова', 'Невролог', 12, 'Специалист в области неврологии с большим опытом диагностики и лечения заболеваний нервной системы', '/placeholder.svg'),
  ('Дмитрий Сидоров', 'Ортопед', 8, 'Опытный врач-ортопед, занимается лечением заболеваний и травм опорно-двигательного аппарата', '/placeholder.svg'),
  ('Елена Волкова', 'Офтальмолог', 10, 'Врач-офтальмолог с многолетним опытом в диагностике и лечении заболеваний глаз', '/placeholder.svg'),
  ('Андрей Морозов', 'Терапевт', 20, 'Врач-терапевт высшей категории, специалист широкого профиля с большим клиническим опытом', '/placeholder.svg'),
  ('Ольга Козлова', 'Гинеколог', 14, 'Врач-гинеколог с опытом работы в области женского здоровья и репродуктивной медицины', '/placeholder.svg')
on conflict do nothing;

-- Enable realtime for reviews table
alter table public.reviews replica identity full;
alter publication supabase_realtime add table public.reviews;