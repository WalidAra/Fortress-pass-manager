import {
  createAccount,
  deleteAccount,
  updateAccount,
  getUserAccounts,
  getSavedPasswords,
  getSavedCreds,
  getFavAccounts,
  getRecentAccounts,
  getAccountsByCategory,
  getAccountByID,
} from "../../../../controllers";
import express from "express";
const router = express.Router();

router
  .get("/:accountId", getAccountByID)
  .get("/", getUserAccounts)
  .post("/create", createAccount)
  .get("favAccounts", getFavAccounts)
  .get("/category/:category", getAccountsByCategory)
  .put("/update", updateAccount)
  .get("/recentAccounts", getRecentAccounts)
  .delete("/", deleteAccount)
  .get("/savedPasswords", getSavedPasswords)
  .get("/savedCreds", getSavedCreds);

export default router;
