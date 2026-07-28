const express = require ("express");
const router = require("./router.config")

const app = express()

// Parser
app.use((req,res,next)=>{
    console.log("I am here")
    next()

})
// router mounting
app.use(router)



module.exports= app;