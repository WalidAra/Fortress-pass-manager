import express from "express";
const router = express.Router();
import generalRoutes from "./general/routes";

router.use("/general", generalRoutes);

export default router;
