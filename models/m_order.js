const mongoose=require("mongoose")
 



const  orderSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        },
    ],
       
 },{timestamps:true}
);

const orderModel=mongoose.model("order",orderSchema)


module.exports=orderModel;


