import { Schema,model } from "mongoose";

let userShema = new Schema({
    name : {type: String},
    password : String,
    email: {type: String, unique: true}
}, {static: true})

let userModel = model("User",userShema)

export default userModel