import { UsersService } from "../service/users.service.js";


export class Users {
    static async register(req,res,next){
        try {
            await UsersService.register_User(req.body);
            res.status(201).send({success: true,message: "success"}) 
        } catch (error) {
            console.error("Error in register:", error.name); 
            next(error)
        }
    }

    static async check(req,res,next){
        try {
            let data = await UsersService.is_check(req.body);
            res.status(200).send({success: true,data,message: "success"})
        } catch (error) {
            console.error("Error in ckeck: ", error);
            next(error)
        }
    }
    static async login(req,res,next){
        try {
            let data = await UsersService.login_User(req.body);
            res.status(200).send({success: true,data,message: "success"})
        } catch (error) {
            console.error("Error in login: ", error); 
            next(error)
        }
    }
}

