const Statusmodel=require("../db/statusSchema.js");

const UserStatus_post=async(req,res)=>{
    try{
        const createUserStatus=await Statusmodel.create({
            email:req.body.email,
            name:req.body.name,
            fever:req.body.fever,
            cough:req.body.cough,
            tiredness:req.body.tiredness,
            pain:req.body.pain,
            sorethroat:req.body.sorethroat,
            diarrhoea:req.body.diarrhoea,
            headache:req.body.headache,
            smelllose:req.body.smelllose,
            rash:req.body.rash,
            breathshortness:req.body.breathshortness,
            chestpain:req.body.chestpain,
            speechlose:req.body.speechlose
        });
        res.status(200).json({ data: createUserStatus });
    }
    catch(err){
        console.log(err);
    }
}
module.exports = { UserStatus_post };