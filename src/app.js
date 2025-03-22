const express = require('express');
const connectDB = require('./config/database');
const app = express();

const User = require('./models/user');

//Middleware from Express - for converting req.body into readable json object. Works throughout cos of 'app.use'
app.use(express.json());

app.post('/signup', async (req, res) => {
  //req object saved in a variable
  const userObj = req.body;
  //Creating a new instance of the User Model
  const user = new User(userObj);

  try {
    await user.save();
    res.send('User Added Successfully!');
  } catch (error) {
    res.satus(400).send('Error saving the user', error.message);
  }
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
