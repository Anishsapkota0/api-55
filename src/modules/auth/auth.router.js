const authRouter = require("express").Router()
const authCtrl = require("./auth.controller")
const bodyValidator = require("../../middlewares/validation.middleware")
const LoginDTO = require("./auth.validator")

authRouter.post("/login",bodyValidator(LoginDTO),authCtrl.loginFunction)

authRouter.post("/register",authCtrl.registerFunction)

module.exports= authRouter