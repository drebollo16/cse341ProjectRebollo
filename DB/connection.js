/*const { MongoClient } = require('mongodb');
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */



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