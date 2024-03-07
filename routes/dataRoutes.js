const express = require("express");
const { addData, updateData } = require("../controllers/dataController");

const router = express.Router();

router.post("/add", addData);
router.patch("/update", updateData);

module.exports = router;
