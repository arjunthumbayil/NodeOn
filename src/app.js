const express = require('express');

const app = express();

app.use(
  '/user',
  (req, res) => {
    console.log('Handling the route user1');
    res.send('Response!');
  },
  (req, res) => {
    console.log('Handling the route user2');
    res.send('2nd Response!');
  }
);

app.listen(7777, () => {
  console.log('Server is sucessfully running on port 3005....');
});
