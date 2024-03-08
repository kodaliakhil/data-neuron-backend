const express = require("express");
const {
  addData,
  updateData,
  getData,
} = require("../controllers/dataController");

const router = express.Router();

router.get("/getData", getData);
router.post("/add", addData);
router.patch("/update", updateData);

module.exports = router;
