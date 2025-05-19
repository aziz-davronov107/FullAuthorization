import Joi from "joi";


export class UsersSchema {
    static register = Joi.object({
        name: Joi.string().min(2).max(30).alphanum().required(),
        password: Joi.string().min(8).max(16).required(),
        email: Joi.string().email()
    })

    static login = Joi.object({
        name: Joi.string().min(2).max(30).alphanum().required(),
        password: Joi.string().min(8).max(16).required()
    })
}