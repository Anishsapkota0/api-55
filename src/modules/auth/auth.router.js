const authRouter = require("express").Router()
const authCtrl = require("./auth.controller")
const bodyValidator = require("../../middlewares/validation.middleware")
const {LoginDTO,RegisterDTO} = require("./auth.validator")


authRouter.post("/login",bodyValidator(LoginDTO),authCtrl.loginFunction)

authRouter.post("/register",bodyValidator(RegisterDTO),authCtrl.registerFunction)

module.exports= authRouter