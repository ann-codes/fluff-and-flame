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

INSERT INTO adoptable_creatures(
    name,
    creature_img,
    age,
    vaccination_status,
    adoption_story,
    adoption_status,
    type_id
  )
VALUES
  (
    'Nyan Nyan',
    'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG',
    6,
    'no',
    'Was found at the end of a rainbow and is looking for a new sky home',
    'available',
    1
  ),
  (
    'Bob Nyanley',
    'https://s3.amazonaws.com/colorslive/jpg_512x512/377224-lglLt_mui26xjl6y.jpg',
    21,
    'no',
    'A Nyan cat in the shape of a burger',
    'available',
    1
  ),
  (
    'Spyro',
    'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/11/spyro_reignited.png',
    7950,
    'yes',
    'Fought many a battle now needs a happy home',
    'available',
    2
  ),
  (
    'Peter Pegasus',
    'https://vignette.wikia.nocookie.net/disney/images/e/e7/Peter_Pegasus.jpg/revision/latest?cb=20180601060225',
    2,
    'no',
    'Fell from the clouds and into your arms',
    'available',
    3
  ),(
    'Yoshi',
    'https://www.mariowiki.com/images/thumb/4/4d/Yoshi_-_Mario_Party_10.png/784px-Yoshi_-_Mario_Party_10.png',
    38,
    'yes',
    'Is really a dinosaur, but whatever',
    'adopted',
    2
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
    2
  ),
  (
    'A BAD OWNER',
    '617-666-6666',
    'animal@abuser.com',
    'own',
    'pending',
    2
  ),
  (
    'Princess Peach',
    '617-666-8901',
    'princess@peach.com',
    'rent',
    'approved',
    5
  ),
  (
    'Finn',
    '617-666-8888',
    'baby@nephew.com',
    'own',
    'pending',
    3
  );