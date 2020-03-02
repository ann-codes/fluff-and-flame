INSERT INTO creature_types(type, description, img_url)
VALUES
    ('Nyan Cat', 'A mystical flying space feline in the shape of a pop tart.', 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'),
    ('Dragon', 'A reptile in varired sizes and magical abilities.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Dragon.svg/1200px-Dragon.svg.png'),
    ('Unicorn', 'A equine animal, typically with white fur, easily identifed by a large horn on their heads', 'https://upload.wikimedia.org/wikipedia/en/7/78/The_Hunt_of_the_Unicorn_Tapestry_7.jpg');

INSERT INTO adoptable_creatures(
    name,
    img_url,
    age,
    vaccination_status,
    adoption_story,
    adoption_status,
    type_id
)
VALUES
    ('Nyan Nyan',)