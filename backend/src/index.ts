console.clear();
import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import cors from "cors";
import { configENV } from "./config/config.env";
import router from "./routes";
import logger from "./helpers/logger";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const PORT = configENV.port || 3000;
const swaggerDocument = YAML.load("./swagger.yaml");

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  logger(app, Number(PORT));
});
