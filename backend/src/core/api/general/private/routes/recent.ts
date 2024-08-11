import { markRecentAccount } from "../../../../controllers";
import express from "express";
const router = express.Router();

router.post("/create", markRecentAccount);

export default router;
