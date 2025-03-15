require('dotenv').config();
const dbUri = process.env.DB_URI;

const mongoose = require('mongoose');

connectDB = async () => {
  await mongoose.connect(dbUri);
};

connectDB()
  .then(() => {
    console.log('Database connection established...');
  })
  .catch((err) => {
    console.log('Database cannot be connected!!');
  });
