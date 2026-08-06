const Joi = require("joi");

const LoginDTO = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().min(8).max(25).required()
})

const RegisterDTO = Joi.object({
    name : Joi.string().required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(8).max(25).required(),
    confirmPassword : Joi.ref("password"),
    role : Joi.string().allow("user","author").default("user"),
    image : Joi.string().allow(null,'').optional().default(null)

})


module.exports = {LoginDTO,RegisterDTO}