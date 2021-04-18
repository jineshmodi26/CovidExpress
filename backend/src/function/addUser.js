const Register=require("../db/userSchema.js");

const addUser_post=async (req,res)=>{
    try{
        const userData=await Register.create({
            username:req.body.username,
            gender:req.body.gender,
            emailid:req.body.emailid,
            password:req.body.password,
            cpassword:req.body.cpassword,
            isActive:req.body.isActive
        });
        res.status(200).json({ data: userData });
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { addUser_post };