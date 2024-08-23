import { markFavAccount, deleteFavAccount, getFavAccounts } from "../../../../controllers";

import express from "express";
const router = express.Router();

router
  .post("/create", markFavAccount)
  .delete("/delete", deleteFavAccount)
  .get("/all", getFavAccounts);

export default router;
