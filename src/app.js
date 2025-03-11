const express = require('express');

const app = express();

// this will only handle  GET call to API calls to /test
app.get('/user', (req, res) => {
  res.send({ firstName: 'John', lastName: 'Doe' });
});

app.post('/user', (req, res) => {
  console.log('Save data to the DB.');
  res.send('Data saved to DB successfully!');
});

// this will match all the HTTP method API calls to /test
app.use('/test', (req, res) => {
  res.send('Hello from the server, yeah right!');
});

app.listen(3005, () => {
  console.log('Server is sucessfully running on port 3005....');
});
