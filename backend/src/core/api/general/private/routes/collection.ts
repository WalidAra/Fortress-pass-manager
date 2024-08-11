import {
  createCollection,
  addNewAccountToCollection,
  deleteCollection,
} from "../../../../controllers";

import express from "express";
const router = express.Router();

router
  .post("/create", createCollection)
  .post("/add", addNewAccountToCollection)
  .delete("/delete", deleteCollection);

export default router;
