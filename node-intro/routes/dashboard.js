const express = require('express'); // Make sure to require express module
const router = express.Router(); // Create a Router instance

// Define the route for /dashboard (or whatever URL you want)
router.get('/', async (req, res) => {
  try {
    // Render the page, passing back the message to be used in that page
    res.render('dashboard', {
      maintitle: 'Node.js Lesson 1: Setting Up Your First App',
      subtitle1: 'A quick introduction to Node.js and Express.js',
      installation: 'To install, make sure you have Node.js and npm installed. Then, create a folder named "mynote" and inside it, navigate to the project directory using your terminal.',
      paragraph1: 'This file is the core of our application, it sets up everything we need to build our web app. It`s where all the magic happens!',
      paragraph2: 'We`ll be using Express.js, a popular framework for building Node.js applications, to handle incoming requests and serve dynamic content. Think of it as the traffic controller for your website.',
      paragraph3: 'Don`t worry if you\'re new to this, we`ll break it down step-by-step! We`ll cover installing dependencies, setting up routes, and using templates to create interactive web pages.',
      paragraph4: 'First, let`s install the necessary tools. Open your terminal, navigate to the "mynote" folder, and run `npm install express body-parser ejs`. This will download all the libraries we need.',
      paragraph5: 'Next, you`ll need a simple HTML file (like index.html) to display our content. Create a file named “index.html” in your “views” directory, this is where Express looks for templates.',
      paragraph6: 'Now, let`s create the template file (index.ejs). This file will use EJS syntax to dynamically generate HTML. For example, you could have something like `<h1><%= title %></h1>` to display a dynamic title.',
      paragraph7: 'In your app.js, you`ll need to import Express, body-parser, and ejs. You`ll also set up the view engine and static files. This will give your application structure.',
      paragraph8: 'Finally, create a routes directory with a dashboard file. Inside this file, define an endpoint for the root route (`/`) that renders the “dashboard” template, passing in a message object to display dynamic content.' ,
      extra_info: 'Remember to save your changes and restart your Node.js server! Happy coding!'
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

module.exports = router; // Export the router so it can be used in your main app file