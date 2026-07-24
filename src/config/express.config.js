const express = require ("express")

const app = express()

//routing below

app.get("/",(req,res)=>{

res.send("Home world")
})

app.get("/about-us",(req,res)=>{
    res.send("About us")
})

module.exports= app;