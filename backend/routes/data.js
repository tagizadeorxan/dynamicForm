var express = require("express");
const DataController = require("../controllers/DataController.js");

var router = express.Router();

router.get("/", DataController.data);


module.exports = router;