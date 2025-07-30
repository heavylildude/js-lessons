/**
 * app.js
 *
 * This is the heart of your Node.js application.
 * It uses the Express.js framework to create a web server that can handle
 * requests from a browser, interact with a database, and send back web pages or data.
 * Think of it as the main engine room.
 */

// --- DEPENDENCIES ---
// Here we're importing all the tools (modules) we need.
const express = require('express');  // Import the Express framework
const path = require('path'); // For handling file paths (important!)
const body_parser = require('body-parser'); // Middleware for parsing form data
const ejs = require('ejs'); // EJS engine for templating

const app = express(); // Create an instance of the Express application
const port = 9999; // Set the port number (you can change this)

// --- MIDDLEWARE & SETUP ---
app.use('/assets', express.static('assets'));// Serve static files (CSS, JS, images) – important for styling and functionality
app.set('view engine', 'ejs'); // Tell Express which view engine to use (EJS in our case)
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.use(body_parser.urlencoded({ extended: true }));  // Use body-parser middleware to parse URL-encoded data GET and POST


// --- ROUTES ---

// Dashboard
const dashboard = require('./routes/dashboard'); // Import the router
app.use('/dashboard', dashboard); // Mount the routes at /dashboard

// --- START SERVER ---
// Start the server and listen for connections
app.listen(port, () => {
  console.log(`🏄‍♂️ port ${port}`); //Backticks for dynamic strings and variables, single quotes for the basics strings only.
});