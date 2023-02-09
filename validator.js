const Joi = require("joi")

const validator=(schema)=(payload)=>schema.validate(payload,{abortEarly:false})
const signupSchema=Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(15).required(),
    confirmPassword: Joi.ref('password'),
    fullName: Joi.string().required(),
    mobileNumber: Joi.number().max(10).required(),
    dob: Joi.date().greater(new Date('2012-01-01')).required()

})

exports.validateSignup=validator(signupSchema)