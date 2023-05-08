const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB 