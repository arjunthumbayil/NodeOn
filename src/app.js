const express = require('express');

const app = express();

app.get('/getUserData', (req, res) => {
  try {
    //Logic of DB call and getting usedata
    throw new Error('asfkj');
    res.send('Use logged in successfully!');
  } catch (err) {
    res.status(500).send('Error: Contact Support Team');
  }
});

app.use('/', (err, req, res, next) => {
  if (err) {
    //log your error
    res.status(500).send('Something went wrong');
  }
});

app.listen(7777, () => {
  console.log('Server is sucessfully running on port 7777....');
});
