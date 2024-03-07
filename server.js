const dotenv = require("dotenv").config(); // To access environment(.env) variables
const express = require("express"); // Framework we are using
const mongoose = require("mongoose"); // Helps to connect to MongoDb
const cookieParser = require("cookie-parser"); // We are going to authenticate the user using cookies
const dataRoutes = require("./routes/dataRoutes");
const errorHandler = require("./middlewares/errorMiddleware");
const cors = require("cors"); // Helps in resolving the connection b/w frontend and backend

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

// Routes
app.use("/api/data", dataRoutes);
app.get("/", (req, res) => {
  res.send("Home Page");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
