const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("MongoDB is Connected!"))
  .catch((error) => console.log(error));

// Create app instance after MongoDB is connected
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8080;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

////////// ROUTE INITIALIZATION //////////
const businessRoute = require("./routes/business.route");
app.use("/business", businessRoute);

const userRoute = require("./routes/user.route");
app.use("/user", userRoute);

const toolRoute = require("./routes/tool.route");
app.use("/tool", toolRoute);

const serviceScheduleRoute = require("./routes/service_schedule.route");
app.use("/service_schedule", serviceScheduleRoute);

const serviceTypeRoute = require("./routes/service_type.route");
app.use("/service_type", serviceTypeRoute);

const jobRoute = require("./routes/job.route");
app.use("/job", jobRoute);
