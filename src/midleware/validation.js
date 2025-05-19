import { CustomError } from "../CustomError/customError.js";
import { UsersSchema } from "../utils/validations.js";


export default (req,res,next) => {
   try {
        if (req.path == "/register"){
            let {error,value} = UsersSchema.register.validate(req.body);
            if (error) throw new CustomError(error.details[0].message,400);
        }
        if (req.path == "/login"){
            let {error,value} = UsersSchema.login.validate(req.body);
            console.log(value,"yoq");
            
            if (error) throw new CustomError(error.details[0].message,400);
            console.log("ishladi");
        }
        next();
   } catch (error) {
        next(error)
   }

}
