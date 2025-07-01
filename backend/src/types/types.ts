
import z from "zod";

export const ProductTypes = z.object({
    title  :     z.string(),
    description :z.string(),
    price:       z.number(),
    stock:       z.number(),
    category:    z.string(),
    image :      z.string() 
})