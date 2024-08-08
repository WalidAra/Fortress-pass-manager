import express from "express";
const router = express.Router();
import publicRoutes from "./public";
import privateRoutes from "./private";
import { checkAuth } from "../../../middleware";

router.use("/public", publicRoutes);
router.use("/private", checkAuth, privateRoutes);

export default router;
