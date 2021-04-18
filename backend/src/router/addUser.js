const express=require('express');
const addUser=express.Router();

const addUserFunction = require("../function/addUser.js");

addUser.route("/addNewUser").post(addUserFunction.addUser_post);

module.exports= addUser;