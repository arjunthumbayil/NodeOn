require('dotenv').config();
const dbUri = process.env.DB_URI;

const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(dbUri);
};

//module.exports = connectDB;

connectDB()
  .then(() => {
    console.log('Database connection established...');
  })
  .catch((err) => {
    console.error('Database connection cannot be established...', err.message);
  });
