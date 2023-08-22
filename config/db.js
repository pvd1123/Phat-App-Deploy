const { default: mongoose } = require("mongoose")
const colors = require('colors')
const dotenv = require("dotenv").config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errror in Mongodb ${error}`.bgRed.white);
  }
};

module.exports = connectDB;