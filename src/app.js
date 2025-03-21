const express = require('express');
const connectDB = require('./config/database');
const app = express();

const User = require('./models/user');

app.post('/signup', async (req, res) => {
  const userObj = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john_doe@gmail.com',
    password: 'johndoe@123',
  };
  //Creating a new instance of the User Model
  const user = new User(userObj);

  await user.save();
  res.send('User Added Successfully!');
});

connectDB()
  .then(() => {
    console.log('Database connection established...');

    app.listen(7777, () => {
      console.log('Server listening on port 7777');
    });
  })
  .catch((err) => {
    console.error('Database connection cannot be established...', err.message);
  });
