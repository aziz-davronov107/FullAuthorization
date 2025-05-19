import userModel from "../models/usersModel.js";
import bcrypt from "bcrypt";
import { CustomError } from "../CustomError/customError.js";
import JWT from "../utils/jwt.js";
import path from "path"
import nodemailer from "nodemailer"
import fs from "fs"





export class UsersService {
  constructor() { }

  static async resultToken(malumot) {
    return {
      accessToken: JWT.sign(malumot),
      refreshToken: JWT.signRF(malumot)
    }
  }
  static async register_User(data) {
    try {
      const user = await userModel.findOne({ email: data.email })

      if (user) {
        throw new CustomError("Bunday foydalanuvchi bazada mavjud !", 400)
      }

      const random = Math.floor(100000 + Math.random() * 900000).toString();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
      });

      const Options = {
        from: "Yandiev-Company <azizdavronov2005@gmail.com>",
        to: data.email,
        subject: "Shu kodni kiriting",
        html: `<h2>${random}</h2>`
      };

      await transporter.sendMail(Options)
      data.random = random
      fs.writeFileSync(path.join(process.cwd(), "src", "config", "second.data.json"), JSON.stringify(data, null, 4));

    } catch (error) {
      throw error;
    }
  }

  static async is_check(data) {
    try {
      let hash_pass = await bcrypt.hash(data.password,10);
      data.password = hash_pass
      let user = await userModel.create(data);
      return await this.resultToken(user)
    } catch (error) {
      throw error;
    }
  }

  static async login_User(data) {
    try {
      const user = await userModel.findOne({ username: data.username });

      if (!user) throw new CustomError("username yoki password Xato", 404);

      const check = await bcrypt.compare(data.password, user.password);
      if (!check) throw new CustomError("username yoki password Xato", 404);

      let result = await this.resultToken(user);
      return result


    } catch (error) {
      throw error;
    }
  }
}