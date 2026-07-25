const router = require("express").Router()
const authRouter = require("../modules/auth/auth.router")
const bannerRouter = require("../modules/banner/banner.router")
const brandRouter = require("../modules/brand/brand.router")
const categoryRouter = require("../modules/category/category.router")
const chatRouter = require("../modules/chat/chat.router")
const orderRouter = require("../modules/order/order.router")
const productRouter = require("../modules/product/product.router")
const transactionRouter = require("../modules/transaction/transaction.router")
const userRouter = require("../modules/user/user.router")


router.use("/auth",authRouter)
router.use(bannerRouter)
router.use(brandRouter)
router.use("/category",categoryRouter)
router.use(chatRouter)
router.use(orderRouter)
router.use(productRouter)
router.use(transactionRouter)
router.use(userRouter)

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

router.use(authRouter)

router.use("/test",(req,res)=>{
    //this is a test router

})

module.exports= router
