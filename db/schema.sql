DROP TABLE IF EXISTS creature_types;
CREATE TABLE creature_types (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL, 
    description TEXT,
    img_url VARCHAR(255)
);

CREATE UNIQUE INDEX index ON creature_types(type);
