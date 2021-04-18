const express=require("express");
const registeredUser=express.Router();

const registeredUserFunction = require("../function/registereduser.js");

registeredUser.route("/existingUser").get(registeredUserFunction.RegisteredUser_get);

module.exports = registeredUser;