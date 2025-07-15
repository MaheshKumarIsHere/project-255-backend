import mongoose from "mongoose";

const visaSchema = new mongoose.Schema(
  {
    maidName: {
      type: String,
    },
    documentNumber: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "under-process", "accepted", "rejected"],
    },
    eicNumber: {
      type: String,
      unique: true,
    },
    crNumber: {
      type: String,
    },
    applicationNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Visa = mongoose.model("Visa", visaSchema);

export default Visa;
