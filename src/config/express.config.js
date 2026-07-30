const express = require ("express");
const router = require("./router.config")

const app = express()


// Input static or built in middlewares


// Parser (It is a data receiving technique)

//parser multipart/ form-data => parser(middleware 3rd party middleware)

// parser application /x-www-form-urlencoded
app.use(express.urlencoded({limit : "2mb"}))
// parser application/json
app.use(express.json())
// router mounting


app.use(router)

app.use((req,res,next)=>{
   
    next({
        detail : null,
        message :"route not found",
        code : 404,
        status : "NOT_FOUND"

    })


})

//error handeling middleware
// todo : based on error type, generate dynamic message and body of response

app.use((error,req,res,next)=>{

    console.log(error)
    let code = error.code ?? 500
    let detail = error.detail ?? error.details ?? null
    let msg = error.message ?? "App server error..."
    let status = error.status ?? "App error..."

        res.status(code).json({
        error : detail,
        message : msg,
        status : status


    })



})



module.exports= app;