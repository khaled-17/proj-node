const mongoose=require("mongoose")
 



const  productSchema= new mongoose.Schema({
    title:{type:String,require:true,unique:true},
    // desc:{type:String,require:true,unique:true},
    // img:{type:String,require:true},
    //  price:{type:String,require:true}
     seller: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"seller"
    }
    
 },{timestamps:true}
);

const productModel=mongoose.model("product",productSchema)


module.exports=productModel;


 