import express from "express";
const router = express.Router();
import authRouter from "./routes/auth";

router.use("/auth", authRouter);

export default router;
