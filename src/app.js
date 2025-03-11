const express = require('express');

const app = express();

app.use('/hello/2', (req, res) => {
  res.send('Abracadabra!');
});

app.use('/hello', (req, res) => {
  res.send('hello hello hello!');
});
app.use('/test', (req, res) => {
  res.send('Hello from the server, yeah right!');
});

app.listen(3005, () => {
  console.log('Server is sucessfully running on port 3005....');
});
