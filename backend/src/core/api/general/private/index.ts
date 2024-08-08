import express from "express";
const router = express.Router();
import clientRouter from "./routes/client";

router.use("/client", clientRouter);

export default router;
