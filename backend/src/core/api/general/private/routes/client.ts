import { getClientProfile, updateProfile , deleteProfile } from "../../../../controllers";
import express from "express";
const router = express.Router();

router.get("/profile", getClientProfile);
router.put("/update", updateProfile);
router.delete("/delete", deleteProfile);

export default router;
