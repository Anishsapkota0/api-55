const authRouter = require("express").Router()
const authCtrl = require("./auth.controller")

authRouter.post("/login",authCtrl.loginFunction)

authRouter.post("/register",authCtrl.registerFunction)

module.exports= authRouter