const express = require ("express");
const router = require("./router.config")

const app = express()

// Parser

// router mounting
app.use(router)

app.use((req,res,next)=>{
    res.status(404).json({
        error : null,
        message :"route not found",
        status : "NOT_FOUND"


    })
    console.log("I am here")
    next()

})



module.exports= app;