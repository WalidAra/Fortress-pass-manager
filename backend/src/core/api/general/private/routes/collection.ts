import { createCollection } from "../../../../controllers";

import express from "express";
const router = express.Router();

router.post("/create", createCollection);

export default router;
