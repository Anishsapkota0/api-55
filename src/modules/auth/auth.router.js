const authRouter = require("express").Router()

authRouter.post("/login",(req,res)=>{
   res.json({
    data : "about us",
    message: "Login success ",
    status : "OK"
   })
})

authRouter.post("/register",(req,res)=>{
   res.json({
    data : "about us",
    message: "Login success ",
    status : "OK"
   })
})

module.exports= authRouter