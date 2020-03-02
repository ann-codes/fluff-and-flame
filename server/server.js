const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")
const _ = require("lodash")
const createError = require("http-errors")

const app = express()

app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)

app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const { Pool } = require("pg")

const pool = new Pool({
  connectionString: "postgres://postgres:password@127.0.0.1:5432/fluff_flame"
})

// API Endpoints
app.get("/api/v1/creature_types", (req, res) => {
  pool.connect().then(client => {
    client.query("SELECT * FROM creature_types").then(result => {
      const creatures = result.rows;
      client.release();
      res.json(creatures);
    });
  }).catch(error => {
    console.log("ERROR =====> ", error);
  });
})

// Express routes
app.get("/", (req, res) => {
  res.redirect("/creatures");
});

app.get('*', (req, res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app
