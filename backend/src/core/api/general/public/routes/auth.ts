import { refresh, register, login } from "../../../../controllers";
import express from "express";
const router = express.Router();

router.get("/refresh", refresh);
router.post("/register", register);
router.post("/login", login);

export default router;
