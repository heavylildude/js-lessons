**What is Node?**
=================
Node.js is an open-source JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server-side. It's like having a superpower in your coding arsenal! 🤖

### Using Commandline:

To get started with Node.js, you'll need to install it on your computer. You can do this by downloading and installing from the official website or using a package manager like npm (Node Package Manager). Once installed, open up your terminal/command prompt and type:

node -v

to check if it's working properly.

### Foldering System:

In Node.js projects, you'll often see folders named:

- Root: The top-level folder of the project.
- Views: Where your HTML templates live (we'll get to this later).
- Routes: Where your application logic lives (think of it as the brain of your app).
- Assets: Where you store static files like CSS, JS, images, and more.

Let's Map Out the Key Bits - Brah:
- app.js (Main App on Root Folder): This is where you’ll kick things off. You’ll need to set up Express, connect to your middleware (like body-parser for handling form data), and then tell Express which files to serve as routes.
- Routes Folder (dashboard.js, profile.js, login.js, signup.js, etc): These are the core of your app's functionality. Each route will handle - specific requests and render the appropriate EJS template.
- Views Folder (Templates - /views/...): This is where they’ll use EJS to dynamically generate HTML. They’ll need to display data from notes.json and potentially user profiles.
- Assets Folder (/assets/...): Global CSS and JavaScript for styling and basic interactivity.


### Node Init CLI:

When creating a new Node.js project, you can use the npm init command to set up your project's basic configuration. This includes setting the name of your project, version number, and other essential details. Don't worry too much about this part – we'll cover it in more detail later.

### EJS (Embedded JavaScript):

EJS is a templating engine that allows you to embed JavaScript code directly into your HTML templates. Think of it like having a mini-programming language within your web pages! 🤯

// Here's an example of how EJS works:

<h1><%= maintitle %></h1>

In this example, maintitle is a variable that's defined elsewhere in the code. When rendered, this will output the value of maintitle as text.

*** The Concept: ***
====================

Node.js uses an event-driven, non-blocking I/O model to handle requests and responses efficiently. This means that your server can handle multiple requests concurrently without blocking each other. It's like having a team of super-efficient workers working together in perfect harmony! 🌟

Think of app.js as the CEO of your web app

Imagine your app is a company, and app.js is the top executive. Its job is to make sure everything runs smoothly and efficiently.

Here are some key areas where app.js focuses:

- Setting up the team: In this case, it imports necessary dependencies like Express, EJS, and body-parser. Think of these as team members who will help your web app achieve its goals.
- Configuring the office: It sets up the view engine (EJS) and views directory. This is like setting up the company's headquarters, where all the important stuff happens.
- Defining the business model: The app.js file defines routes for handling incoming requests. These are like different departments within your company that handle specific tasks.


### Middleware

Middleware is like a special kind of employee who helps with specific tasks. In app.js, we have:

- Static files middleware: This employee makes sure static files (like CSS and images) are served efficiently to users.
- Body-parser middleware: This employee helps parse URL-encoded data GET and POST requests, making it easier for the company to handle input.

// Here's an example of how this middleware works:

app.use('/assets', express.static('assets')); // Serve static files (CSS, JS, images)
app.use(body_parser.urlencoded({ extended: true }));  // Use body-parser middleware to parse URL-encoded data GET and POST

In simple terms, these lines of code say:

"Hey, when someone asks for a file in the /assets directory, serve it up from there."
"When we receive a request with some encoded data, use this special employee (body-parser) to help us parse it."


### Routes - What are routes?

In your app, routes are like different streets in a city. Each street has its own unique address and purpose (e.g., main street for shopping or parkway for recreation). Similarly, in Node.js, routes define the specific URLs that trigger certain actions.

Here's an analogy to help you understand:

- URLs as addresses: Just like how a house has a specific address, your web app has specific URLs (addresses) that users can visit.
- Routes as streets: When a user visits one of these URLs, the route is like the street they're on. The route defines what actions to take and which parts of the web app to show.
Defining routes

// In app.js, you define routes using Express's router method:

const express = require('express');
const router = express.Router();

// Define a new route for the dashboard
router.get('/', (req, res) => {
    // Handle GET request
});
Think of this like creating a new street in your city:

1. Router is like the city's main planning committee. It helps organize and manage all the streets.
2. Route is like a specific street within the city. In this case, it's the / route for the dashboard.

Here are some key concepts to keep in mind:

GET: This is like sending a postcard or asking a question. The web app responds with information or data.
POST: This is like sending a package or making a request. The web app processes the data and sends back a response.
Example route

Let's create a simple example:

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the dashboard!');
});

router.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(`Hello, ${name}!`);
});
In this example:

The / route responds with a simple message when a GET request is made.
The /submit route processes form data and sends back a personalized message.
Resources - Slays:

Express Documentation: https://expressjs.com/
EJS Documentation: https://ejs.co/
Node.js Tutorial (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_JSON

*** Let's build that app.js file, brick by bloody brick. 🔥***
==============================================================
Follow bottom tutorial for a very simple guided setup of an app.

### Step 1: Project Setup (If you haven't already)

Make sure you have Node.js and npm installed. Create a new directory for your project, navigate into it in your terminal, and run 

npm init -y 

and voila, you just created a package.json file. This file will track your project’s dependencies.

### Step 2: Install Dependencies – The Essentials

We'll need Express (for handling requests), EJS (for templating), and potentially body-parser for handling form data. Run these commands in your terminal:

npm install express ejs body-parser


### Step 3: app.js - The Foundation

// Here’s the code for your app.js file – let's break it down piece by piece:
const express = require('express');  // Import the Express framework
const path = require('path'); // For handling file paths (important!)
const body_parser = require('body-parser'); // Middleware for parsing form data
const ejs = require('ejs'); // EJS engine for templating

const app = express(); // Create an instance of the Express application
const port = 3000; // Set the port number (you can change this)

// Use body-parser middleware to parse URL-encoded form data
app.use(body_parser.urlencoded({ extended: true });  // Important for handling forms!

// Tell Express which view engine to use (EJS in our case)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Serve static files (CSS, JS, images) – important for styling and functionality
app.use(express.static(path.join(__dirname, 'assets')));


// Basic route to serve a simple "Hello World" page
app.get('/', (req, res) => {
  res.render('index', { message: 'Welcome to your Node.js app!' }); // Render the index.ejs template
});

// Example of a route that handles a POST request (e.g., from a form submission)
// This is just a placeholder - you'll need to implement this later
app.post('/submit', (req, res) => {
  res.send('Form data received!'); // Simple response for now
});

// Start the server and listen for connections
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


Explanation:

- require(): Imports modules (Express, path, body-parser, EJS).
- const app = express();: Creates an instance of the Express application.
- app.set('view engine', 'ejs');: Tells Express to use EJS for rendering views.
- app.set('views', path.join(__dirname, 'views'));: Specifies where your view templates are located. path.join() is crucial for handling file paths correctly across different operating systems.
- app.use(express.static(...)): Serves static files (CSS, JS, images) from the ‘assets’ folder.
- app.get('/', ...): Defines a route that responds to GET requests at the root URL (/). This is where your main page will be served.
- app.post('/submit', ...): Defines a route that responds to POST requests at /submit. This is where you’ll handle form submissions.


### Step 4: Create views/index.ejs (The Basic HTML)

// Create a file named index.ejs in your views directory and paste this into it:
<!DOCTYPE html>
<html>
<head>
  <title>My Node.js App</title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>
Step 5: Run the App!

Save app.js and then run this command in your terminal:
node app.js
You should see "Server listening on port 3000" printed to the console. Open your web browser and go to http://localhost:3000. You should see “Welcome to your Node.js app!” displayed – congratulations, mate! 🎉

### Important Notes:

- File Paths: Make sure the paths in app.js are correct relative to where you’re running the script from.
- Error Handling: For a real application, you'd want to add error handling (try...catch blocks) to catch potential problems.
