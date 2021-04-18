const mongoose=require('mongoose');
const registrationSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
});

const Register=mongoose.model("RegistrationData",registrationSchema);

module.exports=Register;