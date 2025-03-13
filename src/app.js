const express = require('express');

const app = express();

const { adminAuth, userAuth } = require('./middlewares/auth');

app.use('/admin', adminAuth);
app.use('/user', userAuth, (req, res) => {
  res.send('User data sent!');
});

app.listen(7777, () => {
  console.log('Server is sucessfully running on port 7777....');
});
