import express from "express";
import { checkHealth } from "./middleware";
const router = express.Router();
import { api } from "./core/api";

router.get("/health", checkHealth);
router.use("/api", api);

export default router;
