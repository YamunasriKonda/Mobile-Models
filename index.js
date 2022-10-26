const express = require("express");

const app = express();

const routes = require ("./route")

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", routes );

const server = app.listen(4400);

module.exports = server;
