import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "ecommercesecret";

export const UserMiddleware = (req : Request,res : Response,next : NextFunction) => {
     
    const header = req.headers.authorization;
    const token = header?.split(" ")[1] as string;


    const verifyToken = jwt.verify(token,jwtSecret);

    if(verifyToken){
        console.log(
            "user details : " , verifyToken
        )  
        next();
    }
    res.status(403).json({
        msg :" Error at user authorization middleware"
    })
}


export const AdminMiddleware = (req : Request,res : Response,next : NextFunction)=> {
     
    const header = req.headers.authorization;
    const token = header?.split(" ")[1] as string;

    const verifyToken = jwt.verify(token,jwtSecret);

    if(verifyToken){
        console.log(
            "admin details : " , verifyToken
        )  
         next();
    }
    res.status(403).json({
        msg :" Error at admin authorization middleware"
    })  
}

