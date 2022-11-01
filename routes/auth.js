

const router = require("express").Router()
const User = require("../models/m_user");
const Seller = require("../models/m_seller");
const CryptoJS = require("crypto-js")
const jwt =require("jsonwebtoken")



//regstretion 
// http://localhost:5000/api/auth/register



router.post("/user/register", async function (req, res) {
    const newUser = new User({
        username: req.body.username,
         // password: req.body.password,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.pass_sec).toString(),
    });
    try {
 
        const saveduser  = await newUser.save()
        res.status(201).json(saveduser)
        //????way save
        console.log( );

    } catch (err) {
        console.log(err.message);
        res.status(500).json(err.message)

    }


})

// login/
router.post("/user/login", async function (req, res) {

    try {
        const user = await User.findOne({ username: req.body.username });
        console.log(user);
        !user && res.status(401).json("wrong user ")
        // ?? !user
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.pass_sec)
        const orginadlpassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        orginadlpassword !== req.body.password && res.status(401).json("wring password ")
        const{password,...others}=user._doc;
        // const{password,...others}=user._doc;    ????


        const accessToken=jwt.sign(
            {id:user._id},
            process.env.JWT_sec,{expiresIn:"3d"}
        )
          

        res.status(200).json(accessToken)
        // res.status(200).json({...others,accessToken})????...other

    } catch (err) { 
         res.status(500).json(err.message )
  
    }

})


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

router.post("/seller/register", async function (req, res) {
    
    try {
        // username: req.body.username
        req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.pass_sec).toString();
        
  
        const saveduser  = await Seller.create(req.body)
        res.status(201).json(saveduser)
        //????way save
        console.log( );

    } catch (err) {
        console.log(err.message);
        res.status(500).json(err.message)

    }


})

// login/
router.post("/seller/login", async function (req, res) {

    try {
        const user = await Seller.findOne({ username: req.body.username });
        console.log(user);
        !user && res.status(401).json("wrong user ")
        // ?? !user



        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.pass_sec)
        const orginadlpassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        orginadlpassword !== req.body.password && res.status(401).json("wring password ")
        const{password,...others}=user._doc;
        // const{password,...others}=user._doc;    ????

        const accessToken=jwt.sign(
            {id:user._id},
            process.env.JWT_sec,{expiresIn:"3d"}
        )
          

        res.status(200).json({accessToken})
        // res.status(200).json({...others,accessToken})????...other

    } catch (err) { 
         res.status(500).json(err.message )
  
    }

})








module.exports = router;


