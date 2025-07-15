import express from "express";
import { getAllVisa } from "../controllers/visaController.js";

const router = express.Router();

router.route("/").get(getAllVisa);

export default router;
