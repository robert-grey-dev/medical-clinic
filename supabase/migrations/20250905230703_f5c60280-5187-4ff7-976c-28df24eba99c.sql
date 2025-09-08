-- Update image_url paths for all doctors to use the generated images
UPDATE doctors 
SET image_url = '/src/assets/doctors/dr-alexander-smith.jpg'
WHERE name = 'Dr. Alexander Smith';

UPDATE doctors 
SET image_url = '/src/assets/doctors/dr-maria-rodriguez.jpg'
WHERE name = 'Dr. Maria Rodriguez';

UPDATE doctors 
SET image_url = '/src/assets/doctors/dr-david-johnson.jpg'
WHERE name = 'Dr. David Johnson';

UPDATE doctors 
SET image_url = '/src/assets/doctors/dr-emily-chen.jpg'
WHERE name = 'Dr. Emily Chen';

UPDATE doctors 
SET image_url = '/src/assets/doctors/dr-andrew-thompson.jpg'
WHERE name = 'Dr. Andrew Thompson';

UPDATE doctors 
SET image_url = '/src/assets/doctors/dr-sarah-williams.jpg'
WHERE name = 'Dr. Sarah Williams';