const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const hbsMiddleware = require("express-handlebars");
const fs = require("fs");
const _ = require("lodash");
const createError = require("http-errors");

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
);

app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://postgres:password@127.0.0.1:5432/fluff_flame"
});

// API Endpoints
app.get("/api/v1/creature_types", (req, res) => {
  pool
    .connect()
    .then(client => {
      client.query("SELECT * FROM creature_types").then(result => {
        const creatures = result.rows;
        client.release();
        res.json(creatures);
      });
    })
    .catch(error => {
      console.log("ERROR =====> ", error);
    });
});

app.get("/api/v1/creature_types/:type", (req, res) => {
  const findType = req.params.type;
  pool
    .connect()
    .then(client => {
      client
        .query(`SELECT * FROM creature_types WHERE type = '${findType}'`)
        .then(result => {
          const creatures = result.rows;
          if (creatures.length > 0) {
            client.release();
            res.json(creatures);
          } else {
            res.status(404).send("404 Creature Type Not Found!");
          }
        });
    })
    .catch(error => {
      console.log("ERROR =====> ", error);
    });
});

app.get("/api/v1/adoptable/:type", (req, res) => {
  const findType = req.params.type;
  pool
    .connect()
    .then(client => {
      client
        .query(
          `SELECT adoptable_creatures.id AS id, 
          adoptable_creatures.name AS name, 
          adoptable_creatures.creature_img  AS img_url, 
          adoptable_creatures.age AS age,
          adoptable_creatures.vaccination_status AS vaccination_status, 
          adoptable_creatures.adoption_status AS adoption_status, 
          creature_types.type AS type_of_creature 
          FROM adoptable_creatures JOIN creature_types 
          ON creature_types.id = adoptable_creatures.type_id 
          WHERE creature_types.type LIKE '${findType}'`
        )
        .then(result => {
          const creatures = result.rows;
          if (creatures.length > 0) {
            client.release();
            res.json(creatures);
          } else {
            res.status(404).send("404 Creature Type Not Found!");
          }
        });
    })
    .catch(error => {
      console.log("ERROR =====> ", error);
    });
});

app.get("/api/v1/creature_types/:type/:id", (req, res) => {
  const findId = req.params.id;
  const findType = req.params.type;
  pool
    .connect()
    .then(client => {
      client
        .query(
          `SELECT adoptable_creatures.id AS id,
          adoptable_creatures.name AS name,
          adoptable_creatures.creature_img AS creature_img,
          adoptable_creatures.age AS age,
          adoptable_creatures.vaccination_status AS vaccination_status,
          adoptable_creatures.adoption_story AS adoption_story,
          adoptable_creatures.type_id AS type_id,
          creature_types.type AS type
          FROM adoptable_creatures
          JOIN creature_types ON adoptable_creatures.type_id = creature_types.id
          WHERE creature_types.type = $1 AND adoptable_creatures.id = $2;`,
          [findType, findId]
        )
        .then(result => {
          const creature = result.rows;
          if (creature.length > 0) {
            client.release();
            res.json(creature[0]);
          } else {
            res.status(404).send("404 Creature Not Found!");
          }
        });
    })
    .catch(error => {
      console.log("ERROR =====> ", error);
    });
});

app.get("/api/v1/applicants", (req, res) => {
  pool
    .connect()
    .then(client => {
      client
        .query(
          `SELECT adoption_applications.id AS id, 
          adoption_applications.name AS name,
          adoption_applications.phone_number AS phone_number,
          adoption_applications.email AS email,
          adoption_applications.home_status AS home_status,
          adoption_applications.application_status AS application_status,
          adoptable_creatures.id AS creature_id,
          adoptable_creatures.name AS creature_name,
          adoptable_creatures.adoption_status AS adoption_status,
          creature_types.type AS creature_type
          FROM adoption_applications JOIN adoptable_creatures 
          ON adoption_applications.creature_id = adoptable_creatures.id
          JOIN creature_types ON creature_types.id = adoptable_creatures.type_id
          ORDER BY adoptable_creatures.id, adoption_applications.id`
        )
        .then(result => {
          const creatures = result.rows;
          client.release();
          res.json(creatures);
        });
    })
    .catch(error => {
      console.log("ERROR =====> ", error);
    });
});

app.post("/api/v1/applicants", (req, res) => {
  const { name, phone_number, email, home_status, creature_id } = req.body;
  const queryString =
    "INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, creature_id) VALUES ($1, $2, $3, $4, $5, $6)";
  const values = [
    name,
    phone_number,
    email,
    home_status,
    "pending",
    creature_id
  ];

  pool.query(queryString, values).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

app.post("/api/v1/applicants/decision", (req, res) => {
  const { app_decision, app_id, creature_id } = req.body;
  let postQuery = "";
  let values = [];
  if (app_decision === "approved") {
    postQuery = `WITH app_decision AS (UPDATE adoption_applications SET application_status = 'approved' WHERE id = $1)
    UPDATE adoptable_creatures SET adoption_status = 'adopted' WHERE id = $2`;
    values = [app_id, creature_id];
    pool
      .query(postQuery, values)
      .then(again =>
        pool.query(
          "UPDATE adoption_applications SET application_status = 'denied' WHERE id != $1 AND creature_id = $2",
          values
        )
      )
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  } else if (app_decision === "denied") {
    postQuery = `UPDATE adoption_applications SET application_status = 'denied' WHERE id = $1`;
    values = [app_id];
    pool.query(postQuery, values).catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  }
});

// Express routes
app.get("/", (req, res) => {
  res.redirect("/creatures");
});

app.get("/creatures/:type/:id", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("home");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...");
});

module.exports = app;
