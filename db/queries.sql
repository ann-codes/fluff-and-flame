SELECT adoptable_creatures.id AS id, adoptable_creatures.name AS name, adoptable_creatures.img_url AS img_url, adoptable_creatures.age AS age,
adoptable_creatures.vaccination_status AS vaccination_status,
creature_types.type AS type_of_creature FROM adoptable_creatures JOIN creature_types ON creature_types.id = adoptable_creatures.type_id WHERE creature_types.type = '${findType}'