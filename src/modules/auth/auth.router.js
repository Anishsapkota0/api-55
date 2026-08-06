const authRouter = require("express").Router()
const authCtrl = require("./auth.controller")
const bodyValidator = require("../../middlewares/validation.middleware")
const {LoginDTO,RegisterDTO} = require("./auth.validator")
const uploader = require("../../middlewares/uploader.middleware")



//uploader().none()
//uploader().single("fieldName")
//uploader().array("fieldName")
//uploader().fields()


authRouter.post("/register",uploader().single('image'),bodyValidator(RegisterDTO),authCtrl.registerFunction)
authRouter.post("/login",bodyValidator(LoginDTO),authCtrl.loginFunction)

//uploader().none()
//uploader().single("fieldName")
//uploader().array("fieldName")
//uploader().fields()



module.exports= authRouter