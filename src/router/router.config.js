const router = require("express").Router()
router.get("/",(req,res)=>{

    res.json({
        data: "any",
        //error : "any",
        message : "Notify",
        status : "OK"
    })

    //res.end("Hello world")
    //res.render("View file path")
    //res.redirect("/path")
    //res.send("Home world") 
})

router.get("/about-us",(req,res)=>{
   res.json({
    data : "about us",
    message: "about us page ",
    status : "OK"
   })
})

router.post("/login",(req,res)=>{
   res.json({
    data : "about us",
    message: "Login success ",
    status : "OK"
   })
})

router.post("/register",(req,res)=>{
   res.json({
    data : "about us",
    message: "Login success ",
    status : "OK"
   })
})


router.use("/test",(req,res)=>{
    //this is a test router

})

module.exports= router
