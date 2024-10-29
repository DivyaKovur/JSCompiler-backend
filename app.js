// app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const executeRoute = require('./routes/execute'); // Import the execute route

const app = express(); // Create an Express application
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/execute', executeRoute);

module.exports = app; // Export the app instance
