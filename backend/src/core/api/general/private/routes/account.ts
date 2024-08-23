import {
  createAccount,
  deleteAccount,
  updateAccount,
  getUserAccounts,
  getSavedPasswords,
  getSavedCreds,

  getAccountsByCategory,
  getAccountByID,
} from "../../../../controllers";
import express from "express";
const router = express.Router();

router
  .get("/:accountId", getAccountByID)
  .get("/", getUserAccounts)
  .post("/create", createAccount)

  .get("/category/:category", getAccountsByCategory)
  .put("/update", updateAccount)
  .delete("/", deleteAccount)
  .get("/saved/passwords", getSavedPasswords)
  .get("/saved/creds", getSavedCreds);

export default router;
