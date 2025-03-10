const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('You are right!');
});

app.listen(3005, () => {
  console.log('Server is sucessfully running on port 3005....');
});

//testing
