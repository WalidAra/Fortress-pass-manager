import express from "express";
import checkHealth from "./middleware/checkHealth";
const router = express.Router();
import { apiRouter } from "./core/api";

router.get("/health", checkHealth);
router.use("/api", apiRouter);

export default router;
