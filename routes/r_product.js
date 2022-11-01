const m_product = require("../models/m_product");
const m_seller = require("../models/m_seller");

const router = require("express").Router()

const {  verifyTocenAndAdmin,verifyTocenAndAthorizition,verifytocen } = require("./verifyToken");





 


router.post("/", verifytocen,async function (req, res, next) {
  try {
    var data = {title:req.body.title,seller:req.user.id};
    var result = await m_product.create(data);
    // console.log(result);
    res.json(result);
  } catch (err) {
    res.status(422).json(err.message);
  }

  
});


 //   //get name
 router.get("/find/:name",verifytocen,async(req,res)=>{
  try { 
  const data=await m_product.find({title:req.params.name})

   res.status(200).json(data)
  } catch (err) {
      console.log(err);
      res.json(err.message)
      
  }
   })
  

 //   //get by seler name
 router.get("/findbyseller/:name",verifytocen,async(req,res)=>{
  try { 
  const data=await m_seller.findOne({username:req.params.name})

    const idofseller=data.id
    
    const dataname=await m_product.find({seller:idofseller})
    
 
   res.status(200).json(dataname)
  } catch (err) {
      console.log(err);
      res.json(err.message)
      
  }
   })
  










// router.post("/", async function (req, res, next) {

//     console.log("df");

//     // try {
//     //   var product = {name:req.body.name,userId:req.userId};
//     //   console.log("product");
//     //   var result = await create(product);
//     //    res.json(result);
//     // } catch (err) {
//     //   res.status(422).json(err);
//     // }
//     // function create(newTodo){
//     //     return m_product.create(newTodo)
      
//     //    }
    
//   });



// // //create product
// router.post("/", async(req,res)=>{

//     const newProduct =new product(req.body)

// try {

//     const saveProsuct= await newProduct.save();
//     res.json(saveProsuct)

 
// } catch (err) {
//     console.log(err);
//     res.json(err.message)
// } 
//  })



// //update
// router.put("/:id",verifyTocenAndAdmin,async(req,res)=>{
    
//     try {
//          const updatedProduct= await product.findByIdAndUpdate(req.params.id,{
//                  $set:req.body
//                 //  $set:req.body??set
//          },{new:true})
//          res.json(updatedProduct)
    
//     } catch (err) {
//         console.log(err);
//         res.json(err.message)
//     } 
//      })
    
       


    
 
// // //  delet
//  router.delete("/:id",verifyTocenAndAdmin,async(req,res)=>{
// try {
// await product.findByIdAndDelete(req.params.id)
// res.json("we deleted product.......")

// } catch (err) {
//     res.json(err)
    
// }

//  })  


// // //  get product 
// //  router.get("/:id",async(req,res)=>{
// // try {
// // const product= await product.findById(req.params.id)
// // res.json(product  )

// // } catch (err) {
// //     res.json(err)
    
// // }

// //  })  

 
// // // //   //get product
//   router.get("/find/:id",verifyTocenAndAdmin,async(req,res)=>{
//     try { 
//     const product=await product.findById(req.params.id)

//      res.status(200).json(product)
//     } catch (err) {
//         console.log(err);
//         res.json(err.message)
        
//     }
//      })
    
// // //   //get all users
//   router.get("/",async(req,res)=>{

//     const bycategories=req.query.category;
//     try { 
//         let products;


//         if (bycategories) {
//             products= await product.find({
//                 categories:{
//                     $in:[bycategories]
//                 }
//             })


            
//         } else {
//             products=  await product.find()

//         }


//      res.status(200).json(products)
//     } catch (err) {
//         console.log(err);
//         res.json(err.message)
        
//     }
//      })
    




module.exports = router;



