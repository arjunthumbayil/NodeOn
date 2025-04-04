const express = require('express');
const connectDB = require('./config/database');
const app = express();

const User = require('./models/user');

//Middleware from Express - for converting req.body into readable json object.
//Works throughout cos of 'app.use'
app.use(express.json());

//user API - GET user by emailId
app.get('/user', async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmail });
    res.send(user);
  } catch (error) {
    res.satus(400).send('Error: ', error.message);
  }
});

//feed API - GET all the users from database
app.get('/feed', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send('Error: ', error.message);
  }
});
//signup API - POST a user object to database
app.post('/signup', async (req, res) => {
  // 1 Validaion of Data
  // 2 Encrypt the Password
  // 3 Store into the DB

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

//user API - DELETE a user object from database
app.delete('/user', async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send('User deleted successfully!');
  } catch (error) {
    res.satus(400).send('Error: ', error.message);
  }
});

//user API - PATCH (update) a user object from database
app.patch('/user', async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data);
    res.send('User updated successfully!');
  } catch (error) {
    res.satus(400).send('Error: ', error.message);
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
