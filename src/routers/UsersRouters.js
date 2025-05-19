import {Router} from "express";
import {Users} from "../controllers/userContollers.js";
import validation from "../midleware/validation.js";
import { check } from "../midleware/check.js";



let UsersRouter = Router();
UsersRouter
    .post("/register",validation,Users.register)
    .post("/check",check,Users.check)
    .post("/login",validation,Users.login)
    
export default UsersRouter