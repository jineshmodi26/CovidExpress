const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const addUser = require('./src/router/addUser');
const registeredUser = require('./src/router/registereduser');
const Userstatus=require("./src/router/userStatus");
const app=express();

mongoose.connect("mongodb://localhost:27017/Registration",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
});

// mongoose.connect("mongodb://localhost:27017/Userstatus",{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true,
// });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/addUser",addUser);
app.use("/registeredUser",registeredUser);
app.use("/createUserStatus",Userstatus);

app.listen('1000',()=>{
    console.log("Server is running...");
});