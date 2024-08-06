import express from "express";
import checkHealth from "./middleware/checkHealth";
const router = express.Router();

router.get("/health", checkHealth);

export default router;
