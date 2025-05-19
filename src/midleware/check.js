import fs from "fs";
import path from "path";
import { CustomError } from "../CustomError/customError.js";

export function check(req, res, next) {
    try {
        const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "config", "second.data.json")))
        if (data.random != req.body.random) {
            throw new CustomError("Siz kiritgan parol xato", 400);
        }
        delete data.random
        req.body = data
        next()

    } catch (error) {
        next(error)
    }
}
