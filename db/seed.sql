INSERT INTO creature_types(type, description, img_url)
VALUES
  (
    'Nyan Cat',
    'A mystical flying space feline in the shape of a pop tart.',
    'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
  ),
  (
    'Dragon',
    'A reptile in varired sizes and magical abilities.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Dragon.svg/1200px-Dragon.svg.png'
  ),
  (
    'Unicorn',
    'A equine animal, typically with white fur, easily identifed by a large horn on their heads.',
    'https://upload.wikimedia.org/wikipedia/en/7/78/The_Hunt_of_the_Unicorn_Tapestry_7.jpg'
  );

INSERT INTO adoption_applications(
    name,
    phone_number,
    email,
    home_status,
    application_status,
    creature_id
  )
VALUES
  (
    'Bob',
    '617-666-8888',
    'bobs@burgers.com',
    'own',
    'pending',
    1
  ),
  (
    'A Person',
    '617-666-8901',
    'a@person.com',
    'rent',
    'pending',
    1
  )
