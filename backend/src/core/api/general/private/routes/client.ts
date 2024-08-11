import {
  getClientProfile,
  updateProfile,
  deleteProfile,
} from "../../../../controllers";
import express from "express";
const router = express.Router();

router
  .get("/profile", getClientProfile)
  .put("/update", updateProfile)
  .delete("/delete", deleteProfile);

export default router;
