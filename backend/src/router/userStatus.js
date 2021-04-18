const express=require("express");
const addUserStatus=express.Router();
const UserStatusFunction=require("../function/userStatus.js");
addUserStatus.route("/addUserStatus").post(UserStatusFunction.UserStatus_post);
module.exports=addUserStatus;