const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    modelNumber: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
    },
    warranty: {
      type: Number,
    },
    purchaseDate: {
      type: Date,
      required: true,
    },
    totalRuntime: {
      type: Number,
    },
    jobs: [],
    service: [],
  },
  {
    timestamps: true,
  }
);

const Tool = mongoose.model("Tool", toolSchema);

export default Tool;
