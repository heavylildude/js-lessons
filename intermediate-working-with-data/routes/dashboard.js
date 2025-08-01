const express = require('express'); // Make sure to require express module
const router = express.Router(); // Create a Router instance

// Define the route for /dashboard (or whatever URL you want)
router.get('/', async (req, res) => { // the root of dasboard, described in app.js as /dashboard, so anything inside this will have /dashboard as root
  try {
    res.render('dashboard', {
    "maintitle": "Node.js Lesson: Reading and Writing to a JSON File",
    "subtitle1": "A brief overview of file system operations with Node.js",
    "requirements": "Make sure you have Node.js and npm installed. Basic knowledge of JavaScript objects and the File System (fs) module is a plus.",
    "paragraph1": "This lesson is all about interacting with local data using Node.js's built-in 'fs' module. We'll be reading from and writing to a simple JSON file, which is a super common task in web dev.",
    "paragraph2": "We're going to use the `fs` module, which gives us all the tools we need to handle files. Specifically, we'll be using asynchronous methods like `fs.readFile` and `fs.writeFile` to avoid blocking our application.",
    "paragraph3": "The logic is pretty simple: to read data, we'll open the JSON file, parse the content from a string into a JavaScript object, and then do something with that data. To write, we'll take a JavaScript object, convert it back into a string, and save it to the file.",
    "paragraph4": "First up, let's read a file. Create a file named 'data.json' with some basic JSON data. In your main file (e.g., `app.js`), you'll need to `require('fs')` and then use `fs.readFile('data.json', 'utf8', (err, data) => { ... })` to read it.",
    "paragraph5": "Inside the `readFile` callback, you'll get the raw data as a string. To make it useful, you'll need to parse it using `JSON.parse(data)`. Now you have a JavaScript object you can work with!",
    "paragraph6": "To write data, you'll do the opposite. First, you'll have a JavaScript object you want to save. You'll need to convert it into a JSON string using `JSON.stringify(yourObject)`. This prepares it for writing to the file.",
    "paragraph7": "Finally, you'll use `fs.writeFile('data.json', jsonString, 'utf8', (err) => { ... })` to save your data back to the file. It's a good practice to handle potential errors in the callback, like checking if `err` exists.",
    "paragraph8": "This approach is non-blocking and super efficient for managing local data, which is perfect for server-side logic without needing a full database. Slay!",
    "extra_info": "Don't forget to wrap your JSON.parse() and JSON.stringify() in a try-catch block to handle any malformed JSON data gracefully! Stay stoked!"
  });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

module.exports = router; // Export the router so it can be used in your main app file