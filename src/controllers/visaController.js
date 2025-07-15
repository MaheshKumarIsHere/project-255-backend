import Visa from "../models/visaModel.js";

export const getAllVisa = async (req, res, next) => {
  const { eicNumber, crNumber } = req.query;
  const data = await Visa.find({ $or: [{ eicNumber }, { crNumber }] });
  res.status(200).json({ data });
};
