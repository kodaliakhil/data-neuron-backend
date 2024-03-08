const asyncHandler = require("express-async-handler");

const Data = require("../models/dataModel");

//////////////////////////////////////////  Add Data   //////////////////////////////////////////////
const addData = asyncHandler(async (req, res) => {
  const { entry, addCount, updateCount } = req.body;
  //Validation
  if (!entry) {
    res.status(400);
    throw new Error("Please Fill the input field");
  }
  await Data.deleteMany({});
  const data = await Data.create({
    entry,
    addCount: addCount + 1,
    updateCount,
  });
  if (data) {
    res.status(201).json(data);
  } else {
    res.status(400);
    throw new Error("Invalid Data");
  }
});

const updateData = asyncHandler(async (req, res) => {
  const { _id, entry, addCount, updateCount } = req.body;
  //Validation
  if (!_id) {
    res.status(400);
    throw new Error("Please add something first");
  }
  if (!entry) {
    res.status(400);
    throw new Error("Please Fill the input field");
  }

  await Data.updateOne({
    entry,
    addCount,
    updateCount: updateCount + 1,
  });
  const data = await Data.findById(_id);
  if (data) {
    res.status(201).json(data);
  } else {
    res.status(400);
    throw new Error("Invalid Data");
  }
});

const getData = asyncHandler(async (req, res) => {
  const data = await Data.find();
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error("Data not found");
  }
});

module.exports = {
  addData,
  updateData,
  getData
};
