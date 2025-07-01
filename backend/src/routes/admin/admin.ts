import { prisma } from "@/db/prisma_client";
import { AdminMiddleware } from "@/middleware/middleware";
import { Request, Response, Router } from "express";

const adminRouter = Router();

adminRouter.get("/orders",AdminMiddleware,async (req : Request,res : Response)=> {
    try {
        const orders = await prisma.order.findMany({
           include : {
            user : {
                select : {
                    email : true,
                }
            },
            orderItems : {
                select : {
                    order : true,
                    quantity : true,
                    price : true
                }
            }
           }
        })
     res.status(200).json({
      msg: "Orders fetched successfully",
      orders: orders
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: "Failed to fetch orders",
      error: e
    });
  }
})