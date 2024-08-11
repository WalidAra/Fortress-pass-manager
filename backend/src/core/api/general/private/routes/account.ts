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
} from "../../../../controllers";
import express from "express";
const router = express.Router();

router
  .get("/all", getUserAccounts)
  .post("/create", createAccount)
  .get("favAccounts", getFavAccounts)
  .get("/category/:category", getAccountsByCategory)
  .put("/update", updateAccount)
  .get("recentAccounts", getRecentAccounts)
  .delete("/delete", deleteAccount)
  .get("savedPasswords", getSavedPasswords)
  .get("savedCreds", getSavedCreds);

export default router;
