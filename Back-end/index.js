const express = require('express');

const app = express();

const routes = require ('./route')

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use("/route", routes );

const server = app.listen(4178);

module.exports = server;
