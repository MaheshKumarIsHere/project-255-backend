import path from "node:path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import visaRouter from "./routes/visaRoutes.js";

// CONSTANTS
const DOTENV_PATH = path.join(import.meta.dirname, "../.env");
const PUBLIC_DIR_PATH = path.join(import.meta.dirname, "../public");

console.log(DOTENV_PATH);

// APP INITIALIAZATION
const app = express();

// ENV CONFIGURATION
dotenv.config({ path: DOTENV_PATH });

// STATIC
app.use(express.static(PUBLIC_DIR_PATH));

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/v1/visa", visaRouter);

// GLOBAL ROUTE 404 NOT FOUND
app.use((req, res, next) => {
  res
    .status(404)
    .json({ message: "Page you are looking for not found or not exist." });
});

// GLOBAL ERROR
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Something went wrong!";
  res.status(err.statusCode).json({ message: err.message });
});

export default app;
