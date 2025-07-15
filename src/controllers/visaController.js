import fs from "node:fs";
import path from "node:path";
import Visa from "../models/visaModel.js";

// CONSTANTS
const DATA_FILE_PATH = path.join(import.meta.dirname, "../dev-data/data.json");

const data = fs.readFileSync(DATA_FILE_PATH, "utf-8");
const dataObject = JSON.parse(data);

export const getAllVisa = async (req, res, next) => {
  const { eicNumber, crNumber } = req.query;
  const data = dataObject.find((data) => {
    if (data.eicNumber === eicNumber || data.crNumber === crNumber) {
      return data;
    }
  });
  console.log(data);
  // const data = await Visa.find({ $or: [{ eicNumber }, { crNumber }] });
  res.status(200).json([data]);
};
