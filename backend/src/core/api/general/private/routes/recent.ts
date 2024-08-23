import { getRecentAccounts, markRecentAccount } from "../../../../controllers";
import express from "express";
const router = express.Router();

router
  .post("/create", markRecentAccount)
  .get("/all", getRecentAccounts);


export default router;
