import { refresh, register, login } from "../../../../controllers";
import express from "express";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refresh);

export default router;
