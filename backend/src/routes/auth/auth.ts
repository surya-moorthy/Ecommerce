import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { prisma } from "../../db/prisma_client";
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";

const userAuth = Router();

const jwtsecret = process.env.JWT_SECRET || "ecommercesecret";

const hashedPassword = (password : string):  string => {
     const salt = randomBytes(16).toString('hex');
     const new_password = scryptSync(password,salt,64).toString('hex');
    return `${salt}:${new_password}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, originalHash] = storedHash.split(':');
  const hashBuffer = scryptSync(password, salt, 64);
  const originalHashBuffer = Buffer.from(originalHash, 'hex');

  return timingSafeEqual(hashBuffer, originalHashBuffer);
}

userAuth.post("/register",async (req : Request,res : Response)=> {

    const request = req.body;

    const hashed_password = hashedPassword(request.password); 

    try {
        const user = await prisma.user.create({
        data : {
            name : request.name,
            email : request.email,
            password : hashed_password           
        }
    })

    res.status(200).json({
        user : user,
        msg : "user Signed Successfully"
    })
    }catch(e) {
        res.status(500).json({
            msg : "Internal Server error",
            err : e
        })
    }
})

userAuth.post("/login", async (req,res)=>{

    const request = req.body;

    try {
        const user = await prisma.user.findUnique({
            where : {
                email : request.email
            },
            select : {
                name : true,
                email : true,
                password : true
            }
        })

        if(!user){
            res.status(404).json({
                msg : "user not authorized"
            })
            return
        }

        const verify_password = verifyPassword(request.password,user?.password as string);

        if(verify_password == false) {
               res.status(404).json({
                msg : "user password does not match"
            })
            return
        }

        const token =  await jwt.sign(user.email,jwtsecret);

        res.status(200).json({
            token : token,
            msg : "login successful"
        })
    }catch(e) {
        res.status(501).json({
            msg : "Internal Sever error"
        })
    }
})


userAuth.post("/reset-password",async (req : Request,res : Response)=>{
    const request = req.body;

    try {
        const user = await prisma.user.findUnique({
            where : {
                email : request.email
            }
        })

        if(!user) {
            res.status(404).json({
                msg : "user not found"
            })
            return
        }

         const hashed_password = hashedPassword(request.newPassword); 
        
        const updateUser = await prisma.user.update({
            where : {
                email : request.email
            },
            data : {
                password : hashed_password  
            }
        })
       
        res.status(200).json({
            msg : "Password reset successfully",
            user : updateUser
        })
    }catch(e) {
        res.status(500).json({
            msg : "Internal Server error",
            err : e
        })
    }
})

userAuth.post("/logout",async (req : Request,res : Response)=>{
    res.status(200).json({
        msg : "user logged out successfully"
    })
})

export default userAuth;