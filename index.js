

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv=require("dotenv")


const userRoute=require("./routes/r_user")
const sellerRoute=require("./routes/r_seller")
const authRoute=require("./routes/auth")
const productroutes=require("./routes/r_product")
const orderroutes=require("./routes/order")



dotenv.config();

mongoose.connect('mongodb://localhost:27017/ecom');


// mongoose.connect(process.env.mongo_url).then(() => console.log("db conation done***")).catch((err) => {
//     console.log(err)
// })


app.use(express.json())  //medrl ware 19:59



app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/seller",sellerRoute)
app.use("/api/product",productroutes)
 app.use("/api/order",orderroutes)







console.log("done*************************")
app.listen(process.env.PORT ||5000, () => {
    console.log("server is run");
})