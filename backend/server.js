import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Corrigir __dirname quando usando ES Modules (import/export)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho absoluto até a raiz do projeto
const projectRoot = path.resolve(__dirname, "..");

app.use(express.json());

app.use("/api/products", productRoutes);

// Serve frontend apenas em produção
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "frontend", "dist");

  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
