const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//connectDB();
const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB is Connected');
};
//added due to error 

mongoose.set("strictQuery", false);

module.exports = connectDB;