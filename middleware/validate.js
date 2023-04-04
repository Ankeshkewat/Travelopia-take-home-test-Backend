
const validate=(req,res,next)=>{
    try{
       const {name,email,destination,noOfTravellers,budget}=req.body;
       if(!name||!email||!destination||!noOfTravellers||!budget){
        return res.status(401).json({'msg':"Some field is missing please provide all fields"})
       }
       next()
    }
    catch(err){
        console.error(err);
        res.status(500).json({"msg":"Something went wrong please try again later"})
    }
}

module.exports={validate}