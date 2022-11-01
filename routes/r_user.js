const user = require("../models/m_user");
 
const router = require("express").Router()

const {  verifyTocenAndAdmin,verifyTocenAndAthorizition } = require("./verifyToken");



 
//





//update
// router.put("/:id",verifyTocenAndAthorizition,async(req,res)=>{
// ////if ???
// if (req.body.password) {
//     req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.pass_sec).toString()
// }

// try {
//      const updateuser= await user.findByIdAndUpdate(req.params.id,{
//              $set:req.body
//             //  $set:req.body??set
//      },{new:true})
//      res.json(updateuser)

// } catch (err) {
//     console.log(err);
//     res.json(err.message)
// } 
//  })

    
 
// //  delet
//  router.delete("/:id",verifyTocenAndAthorizition,async(req,res)=>{
// try {
// await user.findByIdAndDelete(req.params.id)
// res.json("we deleted user.......")

// } catch (err) {
//     res.json(err)
    
// }

//  })  
//  get user 
//  router.get("/:id",verifytocenandaurrtuin,async(req,res)=>{
// try {
// await user.findById(req.params.id)
// res.json("we deleet user")

// } catch (err) {
//     res.json(err)
    
// }

//  })  

 
// // //   //get users
//   router.get("/find/:id",verifyTocenAndAdmin,async(req,res)=>{
//     try { 
//     const data=await user.findById(req.params.id)

//      res.status(200).json(data)
//     } catch (err) {
//         console.log(err);
//         res.json(err.message)
        
//     }
//      })
    
// // //   //get all users
//   router.get("/",verifyTocenAndAdmin,async(req,res)=>{
//     try { 
//     const data=await user.find()

//      res.status(200).json(data)
//     } catch (err) {
//         console.log(err);
//         res.json(err.message)
        
//     }
//      })
    




module.exports = router;



