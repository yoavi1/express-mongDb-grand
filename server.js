const express = require('express');
const dotenv = require('dotenv');
// const send = require('send');

// route files
const bootcamps = require('./routes/bootcamps.js');
//load env vars
dotenv.config();
// console.log(process.env.MOD);

const app = express();
// console.log(process.env.port);

app.use('/api/v1/bootcamps', bootcamps);

const port = process.env.port;
console.log(port);
console.log(process.env.MOD);

// app.get('/api/v1/bootcamps', (req, res) => {
//   res.send({ name: 'yoav' });
// });

app.listen(
  port,
  console.log(
    `server running in ${process.env.MOD} on port ${process.env.port}`
  )
);
