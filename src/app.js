const express = require('express');

const app = express();

const { adminAuth, userAuth } = require('./middlewares/auth');

app.use('/admin', adminAuth);

app.post('/user/login', (req, res) => {
  res.send('Use logged in successfully!');
});

app.use('/user', userAuth, (req, res) => {
  res.send('User data sent after check!');
});

app.listen(7777, () => {
  console.log('Server is sucessfully running on port 7777....');
});
