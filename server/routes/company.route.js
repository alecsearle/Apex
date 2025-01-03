const express = require("express");
const router = express.Router();

const controller = require("../controllers/company.controller");

router.get("/", controller.get);

module.exports = router;
