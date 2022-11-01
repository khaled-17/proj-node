const jwt = require("jsonwebtoken");







const verifytocen = (req, res, next) => {

  const token = req.headers.token;
  
  if (token) {
    jwt.verify(token, process.env.JWT_sec, (err, user) => {     
      // if (err)res.json(err.message);
      if (err)res.json("token is not valid");
      
      req.user = user;
      next();
     
    });
  } else {
    return res.json("you are not authenticiated wher is your token");
  }
};
  



const verifyTocenAndAthorizition=(req,res,next)=>{
    verifytocen(req,res,()=>{
    if (req.user.id===req.params.id||req.user.isAdmin) {  
        next()
    } else {
        res.json("you haven't access to do that!!!")
    }
   })}





   const verifyTocenAndAdmin=(req,res,next)=>{
    verifytocen(req,res,()=>{
    if (req.user.isAdmin) {  
      console.log(req.user.isAdmin);
        next()
    } else {
        res.json("you are not X_X admin X_X haven't access to do that")
    }
   })}



 




module.exports={verifytocen,verifyTocenAndAthorizition,verifyTocenAndAdmin}
