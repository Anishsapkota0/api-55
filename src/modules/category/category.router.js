const categoryRouter = require("express").Router()


categoryRouter.get("/",(req,res)=>{
    res.json({
        data : "categories",
        message : "catrgories of item" ,
        status : "OK"

    })
})
 
module.exports= categoryRouter