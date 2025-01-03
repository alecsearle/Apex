const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

// Load environment variables
dotenv.config();

const app = express();
const port = 8080;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("MongoDB is Connected!"))
  .catch((error) => console.error("MongoDB Connection Error:", error));

////////// ROUTE INITIALIZATION //////////
const companyRoute = require("./routes/company.route");
app.use("/company", companyRoute);

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
