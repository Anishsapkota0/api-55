const express = require ("express")

const app = express()

//routing below

app.get("/",(req,res)=>{

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

app.get("/about-us",(req,res)=>{
   res.json({
    data : "about us",
    message: "about us page ",
    status : "OK"
   })
})

app.post("/login",(req,res)=>{
   res.json({
    data : "about us",
    message: "Login success ",
    status : "OK"
   })
})

app.post("/register",(req,res)=>{
   res.json({
    data : "about us",
    message: "Login success ",
    status : "OK"
   })
})


app.use("/test",(req,res)=>{
    //this is a test router

})

module.exports= app;