const order = require("../models/m_order");

const router = require("express").Router()

const {  verifyTocenAndAdmin,verifyTocenAndAthorizition,verifytocen } = require("./verifyToken");




/// create order
router.post("/", verifytocen,async function (req, res, next) {
    try {
      req.body.userId=req.user.id


      var result = await order.create(req.body);
       res.json(result);
    } catch (err) {
      res.status(422).json(err.message);
    }    
  });

//////////////////////////////

/// get all order

router.get("/", verifytocen,async function (req, res, next) {
    try {

     const orders=await order.find({userId: req.user.id}).populate("products","title")


        res.json(orders);
    } catch (err) {
      res.status(422).json(err.message);
    }    
  });








module.exports = router;







// //create order
// router.post("/",verifytocen, async(req,res)=>{

//     const neworder =new order(req.body)

// try {

//     const saveorder= await neworder.save();
//     res.json(saveorder)

 
// } catch (err) {
//     console.log(err);
//     res.json(err.message)
// } 
//  })




// //update
// router.put("/:id",verifyTocenAndAdmin,async(req,res)=>{
    
//     try {
//          const updatedorder= await order.findByIdAndUpdate(req.params.id,{
//                  $set:req.body
//                 //  $set:req.body??set
//          },{new:true})
//          res.json(updatedorder)
    
//     } catch (err) {
//         console.log(err);
//         res.json(err.message)
//     } 
//      })
    
       


    
 
// // //  delet
//  router.delete("/:id",verifyTocenAndAdmin,async(req,res)=>{
// try {
// await order.findByIdAndDelete(req.params.id)
// res.json("we deleted order.......")

// } catch (err) {
//     res.json(err)
    
// }

//  })  

 
 
// // // //   //get use order
//   router.get("/find/:userid",verifyTocenAndAthorizition,async(req,res)=>{
//     try { 
//     const order=await order.find({userId: req.params.userid})

//      res.status(200).json(order)
//     } catch (err) { 
//         console.log(err);
//         res.json(err.message)
        
//     }
//      })
    
// // // //   //get all cart
//   router.get("/",verifyTocenAndAdmin,async(req,res)=>{

//      try { 
//         let order;

//         order= await order.find()



//      res.status(200).json(order)
//     } catch (err) {
//         console.log(err);
//         res.json(err.message)
        
//     }
//      })
    






