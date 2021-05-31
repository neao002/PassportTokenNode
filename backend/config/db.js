require("dotenv").config();
const mongoose = require("mongoose");

const dataLink = process.env.DataLink;

const connectDB = async () => {
  try {
    await mongoose.connect(dataLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB connection has been SUCCESS");
  } catch (error) {
    console.error("MongoDB connection has for some reasons FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
