const express = require("express");
const aRouter = require('./accounts/accounts-router')
const server = express();

server.use(express.json());

server.use('/api/accounts', aRouter)

module.exports = server;
