const express = require("express");
var cors = require('cors');

const app = express();

const routes = require ("./route")

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

app.use("/", routes );

const server = app.listen(4400);

module.exports = server;
