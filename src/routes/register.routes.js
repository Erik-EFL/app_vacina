const registerController = require("../controllers/register.controller");
const express = require("express");

const register = express.Router();

register.post("/", registerController.createLogin);

module.exports = register;
