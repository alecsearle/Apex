const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  jobStatus: {
    type: String,
  },
  completionDate: {
    type: Date,
  },
  startTime: {},
  endTime: {},
  totalHours: {
    type: Number,
  },
});
