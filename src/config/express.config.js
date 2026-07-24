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
    res.send("About us")
})

module.exports= app;