const express = require('express');
//const connectDB = require('./config/database');
require('./config/database');
const app = express();

app.listen(7777, () => {
  console.log('Server listening on port 7777');
});
