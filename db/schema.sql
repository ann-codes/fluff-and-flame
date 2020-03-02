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
    img_url VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    age INT,
    vaccination_status BOOLEAN,
    adoption_story TEXT,
    adoption_status BOOLEAN,
    type_id INTEGER REFERENCES creature_types(id)
);