import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes.js";

const app = express();
app.use(cors());        // allow FE origin
app.use(express.json()); // parse JSON

app.use("/api", router);

const port = Number(process.env.PORT) || 5174;
app.listen(port, () => console.log(`API running at http://localhost:${port}`));
