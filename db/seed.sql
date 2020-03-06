INSERT INTO creature_types(type, description, img_url)
VALUES
  (
    'Nyan Cat',
    'A mystical flying space feline in the shape of a pop tart.',
    'https://i.pinimg.com/originals/93/e4/cd/93e4cd939da891cba51e740039b4f4d2.png'
  ),
  (
    'Dragon',
    'A powerful reptile in varied sizes with magical abilities.',
    'https://i.imgur.com/0Z6wZmr.jpg'
  ),
  (
    'Unicorn',
    'A equine animal, typically with white fur, easily identifed by a large horn on their heads.',
    'https://i.imgur.com/aQ7YyVW.jpg'
  ),
  (
    'Chimera',
    'A fire-breathing monster with a lion head, goat body, and a serpent tail.',
    'https://i.imgur.com/7y2M1yY.jpg'
  ),
  (
    'Kelpi',
    'A shape-shifting water spirit inhabiting the lochs and pools of Scotland.',
    'https://i.quotev.com/img/q/u/17/10/12/jzdw4y5vue.jpg'
  ),
  (
    'Phoenix',
    'A phoenix is a long-lived bird that cyclically regenerates or is otherwise born again.',
    'https://i.imgur.com/StnBqkP.jpg'
  ),
  (
    'Griffin',
    'A legendary creature with the body, tail, and back legs of a lion. Once considered the "King of Beasts".',
    'https://i.pinimg.com/originals/80/2a/13/802a130ab2fe02ebd93eed4c68c5fed1.jpg'
  ),
  (
    'Merfolk',
    'Legendary water-dwelling human-like beings.',
    'https://i.pinimg.com/originals/31/98/6d/31986d15d7188faa4659a5ea81b5f4c3.jpg'
);

INSERT INTO adoptable_creatures(name, creature_img, age, vaccination_status, adoption_story, adoption_status, type_id)
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
    'Taco Cat',
    'https://i.pinimg.com/originals/af/60/ea/af60ea38d3ff1f9c940ed7540e6b4e9e.jpg',
    17,
    'no',
    'A Nyan cat in the shape of a taco. Yummmmmmm.',
    'available',
    1
  ),
  (
    'Galakrond',
    'https://gamepedia.cursecdn.com/wowpedia/thumb/e/e5/Galakrond%2C_the_Wretched.jpg/1032px-Galakrond%2C_the_Wretched.jpg',
    7950,
    'yes',
    'A massive proto-dragon who is known as the progenitor of dragonkind.',
    'available',
    2
  ),
  (
    'Spyro',
    'https://i.kym-cdn.com/photos/images/original/001/378/444/bb6.jpg',
    950,
    'yes',
    'Fought many a battle now needs a happy home',
    'available',
    2
  ),
  (
    'Deathwing',
    'https://gamepedia.cursecdn.com/wowpedia/thumb/2/27/Glowei_Deathwing.jpg/808px-Glowei_Deathwing.jpg',
    6950,
    'yes',
    'One of the five Dragon Aspects and leader of the black dragonflight.',
    'available',
    2
  ),
  (
    'Majestick',
    'https://i.imgur.com/s39N3.jpg',
    276,
    'yes',
    'Is really pretty, but so forelorn. ',
    'available',
    3
  ),
  (
    'Peter Pegasus',
    'https://vignette.wikia.nocookie.net/disney/images/e/e7/Peter_Pegasus.jpg/revision/latest?cb=20180601060225',
    2,
    'no',
    'Fell from the clouds and into your arms. Is not really a unicorn, but who cares?',
    'available',
    3
  ),
  (
    'Jimmy the Unicorn',
    'https://cdn.shopify.com/s/files/1/1365/2497/products/Rainbow-unicorn-mask_900x.png',
    28,
    'no',
    'I am really a unicorn, seriously!',
    'available',
    3
  ),
  (
    'Lisa Frank',
    'https://cdn.shopify.com/s/files/1/2362/8001/products/rainbow-unicorn-paint-with-diamonds-bfcm-fall-sale-fantasy-november-2018-round_648_600x.jpg',
    6828,
    'yes',
    'A the queen unicorn of your childhood dreams.',
    'available',
    3
  ),
  (
    'Squeee',
    'https://i.imgur.com/yWOb3il.jpg',
    8,
    'no',
    'So CUTE.',
    'available',
    3
  ),
  (
    'Blue Eyes',
    'https://vignette.wikia.nocookie.net/yugioh/images/7/7a/DMx214_BEWD.png/revision/latest?cb=20140819225434',
    3000,
    'yes',
    'Released by its former owner due to aggressive nature but is actually quite cuddly.',
    'available',
    2
  ),
  (
    'Alexstrasza',
    'https://gamepedia.cursecdn.com/wowpedia/5/55/Alexstrasza_in_Twilight_Highlands.jpg',
    7809,
    'yes',
    'Alexstrasza the Life-Binder, Aspect of the red dragonflight, is the guardian of all life in the world of Azeroth.',
    'available',
    2
  ),(
    'Yoshi',
    'https://www.mariowiki.com/images/thumb/4/4d/Yoshi_-_Mario_Party_10.png/784px-Yoshi_-_Mario_Party_10.png',
    38,
    'yes',
    'Is really a dinosaur, but whatever',
    'available',
    2
  ),
  (
    'Diablos',
    'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-diablos_render_001.png',
    387,
    'yes',
    'The apex monster of the Wildspire Waste. A menacing, territorial beast that lurks underground. Make some armor from his horns.',
    'available',
    2
  ),
  (
    'Shenron',
    'https://i7.pngguru.com/preview/1013/312/896/shenron-goku-frieza-vegeta-dragon-ball-dragon.jpg',
    470,
    'yes',
    'He shall grant 3 wishes to anyone who finds all 7 of his Dragon Balls and recites the secret password.',
    'available',
    2
  ),
  (
    'Ashley',
    'https://www.tynker.com/projects/screenshot/5bb3d7bbca7e9f770b4597c4/nyan-banana.png',
    1658,
    'yes',
    'Thinks she is a cat. (eye roll).',
    'available',
    1
  ),
  (
    'Griffin',
    'https://banner2.cleanpng.com/20180515/jiq/kisspng-legendary-creature-griffin-mythology-phoenix-5afb4037372194.1567774415264154152258.jpg',
    8008,
    'no',
    'His mom and dad were clearly too lazy to think of another name',
    'available',
    7
  ),
  (
    'Mermaid Man',
    'https://vignette.wikia.nocookie.net/spongebob/images/f/f2/Mermaidman2.jpg/revision/latest?cb=20090413005857',
    100,
    'no',
    'The best mermaid superhe... Never mind. Just take him off our hands.',
    'available',
    8
  ),
  (
    'Yvonne',
    'https://previews.123rf.com/images/lafifa/lafifa1706/lafifa170600890/80112038-funny-mermaid-is-holding-a-glass-of-cocktail-in-her-hand-cartoon-drawing-vector-clip-art-.jpg',
    61,
    'no',
    'Retired but doesnt know when happy hour is over.',
    'available',
    8
  ),
  (
    'Warrior Princess Tula',
    'https://i.pinimg.com/originals/4c/30/3b/4c303b881a0ae10c2e25bbf2dd73edc2.jpg',
    25,
    'yes',
    'Shes just waiting for a reason to kick your butt.',
    'available',
    8
  ),
  (
    'Steve',
    'https://i.ebayimg.com/images/g/Pv4AAOSwTxhcOpJq/s-l640.jpg',
    3000,
    'yes',
    'We can never figure out if hes dabbing or has a headache',
    'available',
    3
  ),
  (
    'Peter',
    'https://c7.uihere.com/files/903/843/718/peter-griffin-intellectual-cartoon-eagle-anime-funny-thumb.jpg',
    38,
    'no',
    'B-B-B Bird, Bird, Bird... The Bird is the word.',
    'adopted',
    7
  ),
  (
    'High Griffinition',
    'https://imgc.allpostersimages.com/img/print/u-g-PD3IV30.jpg?w=550&h=550&p=0',
    30,
    'yes',
    'Dont get caught in the lane!',
    'available',
    7
  ),
  (
    'Charlie',
    'https://s3.amazonaws.com/pq-imgs/images/quizzes/charlie-the-unicor-2520.jpg',
    16,
    'no',
    'Just. Ignore. Him.',
    'available',
    3
  ),
  (
    'Jean Grey',
    'https://www.trendsinternational.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/p/rp16258-1.jpg',
    32,
    'no',
    'The HOTTEST girl out there.... get it?',
    'available',
    6
  ),
  (
    'Moltres',
    'https://www.futuregamereleases.com/wp-content/uploads/2017/07/pokemon-moltres-counters.jpg',
    32,
    'yes',
    'The original Phoenix Pokemon!',
    'available',
    6
  ),
  (
    'Toast',
    'https://media.giphy.com/media/1135FPdT0iGkDK/giphy.gif',
    8,
    'yes',
    'TOAST CAT',
    'available',
    1
  ),
  (
    'Liddy Kiddy',
    'https://media1.tenor.com/images/aae006222ffe56fa053e66521319010c/tenor.gif',
    8,
    'yes',
    'Happy Saint Paddys Day',
    'available',
    1
  ),
  (
    'Junior Junior Junior',
    'https://i.imgur.com/I4XEvGQ.jpg',
    1,
    'yes',
    'An abandoned baby chimera, ready for you to love, love, and love.',
    'available',
    4
  ),
  (
    'Baby Baby Baby',
    'https://i.imgur.com/Frm1U2e.png',
    1,
    'yes',
    'Another abandoned baby chimera, ready for you to love, love, and love.',
    'available',
    4
  ),
  (
    'Jim, John, and Billybob',
    'https://i.pinimg.com/originals/34/44/3d/34443d0a305fb08fd115d2a3a0ebe7d7.jpg',
    131,
    'yes',
    'They are really actually very cuddly.',
    'available',
    4
  ),
  (
    'Karen',
    'https://i.imgur.com/4WR1iFj.jpg',
    98,
    'no',
    'No Karen, put that down.',
    'available',
    5
  ),
  (
    'Josh',
    'https://i.pinimg.com/originals/34/aa/b3/34aab386be816ce2332f38262ce2ea97.jpg',
    72,
    'no',
    'Josh can be emo at times.',
    'available',
    5
  ),
  (
    'Allen',
    'https://i.pinimg.com/originals/85/e8/75/85e875643f9e7dd70c15917743659594.jpg',
    124,
    'yes',
    'Jesus f-ing christ, Allen is horrifying.',
    'available',
    5
  ),
  (
    'Cynthia',
    'https://i.imgur.com/45JFl1p.jpg',
    152,
    'yes',
    'Cynthia leaves puddles everywhere. Kelpies, amiright?',
    'available',
    5
  ),(
    'Adam',
    'https://i.imgur.com/8XwZTr2g.jpg',
    82,
    'yes',
    'Adam is kind of a badass.',
    'available',
    5
  ),
  (
    'Lord Killigan',
    'https://i.imgur.com/5jY0SGU.jpg',
    8987,
    'yes',
    'I am the king of the sun.',
    'available',
    6
  ),
  (
    'Aoife the Elegant',
    'https://i.imgur.com/E0p7yjU.jpg',
    6568,
    'yes',
    'I am the prettiest girl at the ball.',
    'available',
    6
  ),
  (
    'Cootie and Patootie',
    'https://i.pinimg.com/originals/df/41/2d/df412d59c953be9cd3b13f8a069104a4.jpg',
    9568,
    'yes',
    'Twin baby phoenixes. Or are they?',
    'available',
    6
  ),
  (
    'Lady Ephemeral',
    'https://i.pinimg.com/originals/ae/e4/ee/aee4eeb7ff35da99e7237599545d3e9a.jpg',
    588,
    'yes',
    'A little too dramatic.',
    'available',
    6
  ),
  (
    'Joey Tryagain',
    'https://i.pinimg.com/originals/6a/ce/fb/6acefbc85beebad8b259538394ba9cf2.jpg',
    3580,
    'yes',
    'Keep trying until you succeed!',
    'available',
    6
  );

INSERT INTO adoption_applications(name, phone_number, email, home_status, application_status, creature_id)
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
    'pending',
    6
  ),
  (
    'Finn',
    '617-666-8888',
    'baby@nephew.com',
    'own',
    'pending',
    3
  );