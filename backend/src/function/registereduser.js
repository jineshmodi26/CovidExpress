const Registered=require('../db/userSchema.js');

const RegisteredUser_get=async (req,res)=> {
    try{
        const response=await Registered.find();
        res.status(200).json({ data: response });
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { RegisteredUser_get };