import express from "express";
const router = express.Router();
import clientRouter from "./routes/client";
import accountRoutes from "./routes/account";
import favoriteRoutes from "./routes/favorite";
import collectionRoutes from "./routes/collection";
import recentRoutes from "./routes/recent";

router.use("/client", clientRouter);
router.use("/account", accountRoutes);
router.use("/favorite", favoriteRoutes);
router.use("/collection", collectionRoutes);
router.use("/recent", recentRoutes);

export default router;
