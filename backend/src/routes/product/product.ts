import { prisma } from "@/db/prisma_client";
import { AdminMiddleware } from "@/middleware/middleware";
import { ProductTypes } from "@/types/types";
import { Request, Response, Router } from "express";

export const productRouter = Router();

productRouter.post("/", AdminMiddleware,async (req : Request ,res : Response)=>{
    const result = ProductTypes.safeParse(req.body);
     
    if(!result.success){
        res.status(400).json({
            msg : "given input format is wrong"
        })
        return
    }
    try {
        const data = result.data;
        const product = await prisma.product.create({
            data : data
        })

        res.status(200).json({
            product : product,
            msg : "Product added successfully"
        })
        }catch(e) {
             res.status(500).json({
                msg : "Product creation error",
                err : e
             })
        }
})

productRouter.put("/", async (req: Request, res: Response): Promise<void> => {
  const id = req.query.id as string;

  if (!id) {
    res.status(400).json({ msg: "Product ID is required in query" });
    return;
  }

  const result = ProductTypes.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      msg: "Invalid product data format",
      errors: result.error.format()
    });
    return;
  }

  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: result.data
    });

    res.status(200).json({
      product: updatedProduct,
      msg: "Product updated successfully"
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: "Error updating product",
      error: e
    });
  }
});

productRouter.delete("/", AdminMiddleware,async (req: Request, res: Response) => {
  const id = req.query.id as string;

  if (!id) {
     res.status(400).json({ msg: "Product ID is required in query" });
     return;
  }

  try {
    const deletedProduct = await prisma.product.delete({
      where: { id }
    });

    res.status(200).json({
      product: deletedProduct,
      msg: "Product deleted successfully"
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: "Error deleting product",
      error: e
    });
  }
});

