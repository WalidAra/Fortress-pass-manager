import express from "express";
const router = express.Router();
import publicRoutes from "./public";

router.use("/auth/public", publicRoutes);

export default router;
