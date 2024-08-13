import { markFavAccount, deleteFavAccount } from "../../../../controllers";

import express from "express";
const router = express.Router();

router.post("/create" , markFavAccount);
router.delete("/delete", deleteFavAccount);

export default router;
