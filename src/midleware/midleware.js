import fs from "fs"
import path from "path"

export const  errorMiddleware = ((err, req, res, next) => {
      const statusCode = err.statusCode || 500;
      const message = err.message || 'Serverda nomaʼlum xatolik';
      
      if (statusCode >= 500){
            fs.appendFileSync(path.resolve("loger.txt"),`__${req.method}__${req.url}__${Date.now()}__${statusCode}__${message}\n`)
      }
      res.status(statusCode).json({
          statusCode,
          success: false,
          message: statusCode < 500 ? message : 'Serverda nomaʼlum xatolik',
      })
});
