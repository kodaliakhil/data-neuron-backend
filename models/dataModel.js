const mongoose = require("mongoose");

const dataNSchema = mongoose.Schema({
  entry: {
    type: String,
  },
  addCount: {
    type: Number,
  },
  updateCount: {
    type: Number,
  },
});

const Data = mongoose.model("DataNeuron", dataNSchema);
module.exports = Data;
