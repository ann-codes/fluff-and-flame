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
        .query(`SELECT adoptable_creatures.id AS id, adoptable_creatures.name AS name, adoptable_creatures.img_url AS img_url, adoptable_creatures.age AS age,
        adoptable_creatures.vaccination_status AS vaccination_status, creature_types.type AS type_of_creature FROM adoptable_creatures JOIN creature_types ON creature_types.id = adoptable_creatures.type_id WHERE creature_types.type = '${findType}'`)
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
app.post("/api/v1/applicants", (req, res) => {
  const { name, phone_number, email, home_status } = req.body;

  const getCreatureID = 1; // waiting for component to be created for further edits ============
  console.log([name, phone_number, email, home_status, "pending", getCreatureID])

  pool
    .query(
      "INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, creature_id) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, phone_number, email, home_status, "pending", getCreatureID]
    )
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Express routes
app.get("/", (req, res) => {
  res.redirect("/creatures");
});

app.get("*", (req, res) => {
  res.render("home");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...");
});

module.exports = app;
