const mongoose = require("mongoose");
// const { objectId } = mongoose.Schema;

const dataNSchema = mongoose.Schema({
  entry: {
    type: String,
    // required: [true, "Please add a name."],
  },
  // comp2Data: {
  //   type: String,
  //   // required: [true, "Please add a name."],
  // },
  // comp3Data: {
  //   type: String,
  //   // required: [true, "Please add a name."],
  // },
  addCount: {
    type: Number,
  },
  updateCount: {
    type: Number,
  },
});

const Data = mongoose.model("DataNeuron", dataNSchema);
module.exports = Data;
