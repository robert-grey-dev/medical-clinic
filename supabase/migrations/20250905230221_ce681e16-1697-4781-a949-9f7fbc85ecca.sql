-- Update doctors to English names and descriptions
UPDATE doctors 
SET 
  name = 'Dr. Alexander Smith',
  specialty = 'Cardiology',
  description = 'Board-certified cardiologist with over 15 years of experience specializing in cardiovascular diseases and heart surgery.'
WHERE name = 'Александр Иванов';

UPDATE doctors 
SET 
  name = 'Dr. Maria Rodriguez',
  specialty = 'Neurology', 
  description = 'Experienced neurologist specializing in diagnosis and treatment of nervous system disorders with 12+ years of practice.'
WHERE name = 'Мария Петрова';

UPDATE doctors 
SET 
  name = 'Dr. David Johnson',
  specialty = 'Orthopedics',
  description = 'Skilled orthopedic surgeon treating musculoskeletal injuries and disorders with 8+ years of experience.'
WHERE name = 'Дмитрий Сидоров';

UPDATE doctors 
SET 
  name = 'Dr. Emily Chen',
  specialty = 'Ophthalmology',
  description = 'Expert ophthalmologist with extensive experience in eye care and vision disorders for over 10 years.'
WHERE name = 'Елена Волкова';

UPDATE doctors 
SET 
  name = 'Dr. Andrew Thompson',
  specialty = 'Internal Medicine',
  description = 'Board-certified internist with 20+ years of experience providing comprehensive adult healthcare.'
WHERE name = 'Андрей Морозов';

UPDATE doctors 
SET 
  name = 'Dr. Sarah Williams',
  specialty = 'Gynecology',
  description = 'Experienced gynecologist specializing in women\'s health and reproductive medicine with 14+ years of practice.'
WHERE name = 'Ольга Козлова';