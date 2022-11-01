const mongoose=require("mongoose")
 



const  sellerSchema=new mongoose.Schema({
    username:{type:String,require:true,unique:true},
     password:{type:String,require:true},
     
    //  products:
    //     {
    //         product: {
    //             type:String
            
    //         }
    //      }
    // ,     // createdAt:Date.now()
},{timestamps:true}
);

const sellerModel=mongoose.model("seller",sellerSchema)


module.exports=sellerModel;


