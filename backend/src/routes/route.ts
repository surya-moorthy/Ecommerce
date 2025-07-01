import { Router } from "express";
import userAuth  from "./auth/auth";

export const router = Router();

router.use("/auth",userAuth);