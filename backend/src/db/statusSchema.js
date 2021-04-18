const mongoose=require("mongoose");

const statusShcema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    fever:{
        type:String,
        required:true
    },
    cough:{
        type:String,
        required:true
    },
    tiredness:{
        type:String,
        required:true
    },
    pain:{
        type:String,
        required:true
    },
    sorethroat:{
        type:String,
        required:true
    },
    cough:{
        type:String,
        required:true
    },
    diarrhoea:{
        type:String,
        required:true
    },
    headache:{
        type:String,
        required:true
    },
    smelllose:{
        type:String,
        required:true
    },
    rash:{
        type:String,
        required:true
    },
    breathshortness:{
        type:String,
        required:true
    },
    chestpain:{
        type:String,
        required:true
    },
    speechlose:{
        type:String,
        required:true
    },
});

const Statusmodel=mongoose.model("UserStatuse",statusShcema);

module.exports=Statusmodel;