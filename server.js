const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dataRoutes = require("./routes/dataRoutes");
const errorHandler = require("./middlewares/errorMiddleware");
const cors = require("cors");
const morgan = require("morgan");


const PORT = process.env.PORT || 5000;

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// ERROR MIDDLEWARE
app.use(errorHandler);
app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(morgan("dev"));

// Routes
app.use("/api/data", dataRoutes);
app.get("/", (req, res) => {
  res.send("Home Page");
});

//MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
