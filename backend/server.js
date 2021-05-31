const express = require("express");
const app = express();
const plantRouter = require("./routes/plant");
const userRouter = require("./routes/user");
const cors = require("cors");

require("dotenv").config();

const connectDb = require("./config/db");
connectDb();

app.use(express.static(__dirname + "/public"));
app.use(cors());

app.use(express.json());

// routes as REST API for frontend
app.use("/plant", plantRouter);
app.use("/user", userRouter);

// passport config

const passport = require("passport");
const ConnectPassport = require("./config/passport")(passport);
ConnectPassport();

app.listen(5000, () => {
  console.log("Backend is running on port 5000");
});
