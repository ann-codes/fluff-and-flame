DROP TABLE IF EXISTS creature_types;
CREATE TABLE creature_types (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description TEXT,
    img_url VARCHAR(255)
);
CREATE UNIQUE INDEX index ON creature_types(type);

DROP TABLE IF EXISTS adoptable_creatures;
CREATE TABLE adoptable_creatures (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    vaccination_status BOOLEAN,
    adoption_story TEXT NOT NULL,
    adoption_status VARCHAR(255) NOT NULL,
    type_id INTEGER REFERENCES creature_types(id) NOT NULL
);

DROP TABLE IF EXISTS adoption_applications;
CREATE TABLE adoption_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  home_status VARCHAR(255) NOT NULL,
  application_status VARCHAR(255),
  creature_id INTEGER REFERENCES adoptable_creatures(id) NOT NULL
);
