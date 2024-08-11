import { markFavAccount } from "../../../../controllers";

import express from "express";
const router = express.Router();

router.post("/create" , markFavAccount);

export default router;
