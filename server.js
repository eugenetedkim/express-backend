const express = require('express');
const cors = require('cors');
require('dotenv').config();

const server = express();

// Instead of using body-parser middleware, use the new Express implementation of the same thing
server.use(express.json());
server.use(express.urlencoded({extended: true}));

// Allows our Next application to make HTTP requests to Express application
server.use(cors());

server.get('/', (req, res, next) => {
  console.log('Request was made');
  res.send('<h1>Hello World</h1>');
});

server.listen(5000);

