const m_seller = require("../models/m_seller");
const m_product = require("../models/m_product");
 
const router = require("express").Router()

const {  verifytocen,verifyTocenAndAthorizition } = require("./verifyToken");



//update

router.put("/:id",verifytocen,async(req,res)=>{

try {
     const updateuser= await m_product.findByIdAndUpdate(req.params.id,{
             $set:req.body
            //  $set:req.body??set
     },{new:true})
     res.json(updateuser)

} catch (err) {
    console.log(err);
    res.json(err.message)
} 
 })

    
 
// //  delet
 router.delete("/:id",verifyTocenAndAthorizition,async(req,res)=>{
try {
await m_product.findByIdAndDelete(req.params.id)
res.json("we deleted user.......")

} catch (err) {
    res.json(err)
    
}

 })  
//  get user 
//  router.get("/:id",verifytocenandaurrtuin,async(req,res)=>{
// try {
// await m_product.findById(req.params.id)
// res.json("we deleet user")

// } catch (err) {
//     res.json(err)
    
// }

//  })  

 
// // //   //get users
  router.get("/find/:id",verifytocen,async(req,res)=>{
    try { 
    const data=await m_product.findById(req.params.id)

     res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.json(err.message)
        
    }
     })
    
// // //   //get all users
  router.get("/",verifytocen,async(req,res)=>{
    try { 
    const data=await m_product.find()

     res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.json(err.message)
        
    }
     })
    




module.exports = router;



