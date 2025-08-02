// member.js

/*
 * HEY, WELCOME TO THE MEMBER ROUTER THAT'S UPDATED NOT JUST FOR READING BUT ALSO CREATING NEW AND DELETING!
 * Think of this file as the dedicated bouncer and event manager for anything related to members.
 * If a user wants to see all members, add a new one, or check someone's details, this is the file that handles it.
 * It's a "router," which is like a specific set of directions for URLs that start with "/member".
 */

// STEP 1: GATHERING YOUR TOOLS (IMPORTING MODULES)
// We need to bring in some pre-built toolkits (called modules or packages) to help us out.

const express = require('express'); // 'express' is our main toolkit for building the web server. Think of it as the ultimate Lego set for creating web apps. It helps us handle requests from users (like when they visit a URL) and send back responses (like a webpage).

const router = express.Router(); // From the 'express' toolkit, we're grabbing the Router. This is like creating a mini-app specifically for our members. It helps us keep all the member-related URLs (like /member, /member/create, /member/1) neatly organized in this one file, instead of cluttering up our main app file.

const fs = require('fs'); // 'fs' stands for 'File System'. This is our librarian. It's a built-in Node.js module that lets our server read from and write to files on the computer. We'll use this to get our member data from a JSON file.

// Here, we're getting a specific tool from the 'fs' library called 'createWriteStream'.
// A "stream" is a fancy way of saying we're opening a connection to a file to write data bit by bit,
// which can be more efficient than writing it all at once.
// Analogy: Instead of dumping a whole bucket of water (data) at once, you're using a hose (stream) to fill it smoothly.
const FileWriter = require('fs').createWriteStream;


// STEP 2: THE DATA READER (OUR CUSTOM FUNCTION)
// We'll be reading our data file a few times, so let's make a reusable function to keep our code DRY (Don't Repeat Yourself).

function readData() {
  /*
   * This function is our personal data assistant. Its only job is to:
   * 1. Go to the 'data/data.json' file.
   * 2. Read everything inside it.
   * 3. Translate it from JSON format into a JavaScript array we can easily use.
   */

  // `fs.readFileSync('data/data.json', 'utf8')`
  // `readFileSync` tells our librarian ('fs') to "read this file SYNCHRONOUSLY".
  // "Synchronously" means our app will pause everything and wait until the entire file is read.
  // It's like saying, "Hey, stop everything you're doing and read this book to me right now."
  // 'utf8' is the encoding, which is like telling the librarian what language the book is written in so it can be read correctly.
  const data = fs.readFileSync('data/data.json', 'utf8');

  // `JSON.parse(data)`
  // The data we just read is a plain string, even though it's formatted like JSON.
  // We can't easily work with a string. We want an array of objects.
  // `JSON.parse()` is the translator. It takes the JSON string and turns it into a real JavaScript object/array.
  // Now, `membersData` will be a proper list, like: [ {id: 1, name: "..."}, {id: 2, name: "..."} ]
  return JSON.parse(data);
}


// STEP 3: DEFINING THE ROUTES (SETTING UP THE URLS)
// Now we tell our router what to do when a user visits a specific URL.

// =============================================================================================
// ROUTE 1: SHOW ALL MEMBERS (the main members page)
// URL: /member/
// Method: GET (The user is just "getting" or requesting to see data)
// =============================================================================================
router.get('/', (req, res) => { // When a user makes a GET request to '/member'...
  /*
   * `req` (request) is an object holding all the info about the user's request (like their browser, IP, etc.).
   * `res` (response) is an object we use to send a response back to the user's browser.
   */

  // First, let's get all the member data using our handy function.
  const membersData = readData();

  // `res.render('member', { members: membersData });`
  // This is where the magic happens. We're telling Express to "render" a view.
  // 1. It looks for a template file named 'member.ejs' inside our 'views' folder.
  // 2. It takes that template (which is like an HTML file with placeholders).
  // 3. It takes our `membersData` and makes it available inside the template under the name 'members'.
  //    (The `{ members: membersData }` part is like saying, "In the template, whenever you see 'members', use this data").
  // 4. It combines the template and the data to create a final HTML page and sends it to the user's browser.
  res.render('member', {
    members: membersData
  });
});


// =============================================================================================
// ROUTE 2: SHOW A SINGLE MEMBER'S DETAILS
// URL: /member/:id (e.g., /member/1, /member/5, etc.)
// Method: GET
// =============================================================================================
router.get('/:id', (req, res) => { // The `:id` part is a "URL parameter". It's a placeholder for any value.
  // It's like having a street address where the house number can change.

  // Get all members from our file.
  const membersData = readData();

  // `req.params.id` is how we grab the value from the URL. If the user visits `/member/3`, then `req.params.id` will be "3".
  // Note: URL parameters are always strings! So "3" is a string, not a number.
  const memberId = req.params.id;

  // `membersData.find(...)` is a super useful array method. It loops through every member in our `membersData` array.
  // `member => member.id === parseInt(memberId)` is the test. For each `member`, it checks if their `id` matches the `memberId` from the URL.
  // `parseInt(memberId)` is crucial! It converts the ID from the URL (which is a string, e.g., "3") into a number (e.g., 3),
  // so we can compare it to the `id` in our data file, which is also a number.
  const selectedMember = membersData.find(member => member.id === parseInt(memberId));

  // Now, we check if we actually found a member.
  if (selectedMember) { // If the `find` method returned a member object...
    // We render the 'member_detail.ejs' template and pass in the single member's data.
    res.render('member_detail', { member: selectedMember });
  } else { // If `find` returned `undefined` (meaning no member with that ID exists)...
    // We send back a "404 Not Found" error. This is a standard web practice.
    res.status(404).send('Member not found, brah. Bummer.');
  }

});


// =============================================================================================
// ROUTE 3: CREATE A NEW MEMBER
// URL: /member/create
// Method: POST (The user is "posting" or sending new data to the server, usually from a form)
// =============================================================================================
router.post('/create', (req, res) => {

  // `req.body` is where all the data from an HTML form submission lives.
  // To use `req.body`, you must have the `express.urlencoded({ extended: true })` middleware in your main `app.js`.
  // This middleware is like a translator that takes the form data and puts it into the nice `req.body` object for us.
  const newMember = req.body; // `newMember` is now an object like: { member_name: '...', member_phone: '...', ... }

  // Read the current list of members from the file.
  const existingData = readData(); // We use readData() here to get the parsed JSON directly.

  // --- GENERATE A NEW, UNIQUE ID ---
  // We need to give our new member an ID. The best way is to find the highest existing ID and add 1.

  // `existingData.map(member => member.id)`
  // The `.map()` method creates a NEW array by transforming each item in the original array.
  // Here, we're taking our array of member objects `[{id:1, name:"A"}, {id:2, name:"B"}]`
  // and transforming it into an array of JUST the IDs: `[1, 2]`.
  const allIds = existingData.map(member => member.id);

  /*
   * Note: Using Math.max() with an Array Spread Operator (...)
   * This is a slick bit of modern JavaScript for finding the biggest number in an array.
   * `Math.max()` is a function that finds the biggest of the numbers you give it, like `Math.max(5, 10, 2)`.
   * But it doesn't work on a whole array at once, like `Math.max([5, 10, 2])`.
   *
   * The SPREAD OPERATOR `...` comes to the rescue!
   * It "spreads" or "unpacks" the array elements.
   * So, `...allIds` turns `[1, 2, 5]` into `1, 2, 5`.
   *
   * Putting it together: `Math.max(...allIds)` becomes `Math.max(1, 2, 5)`, which correctly returns 5.
   * If the array is empty, `Math.max()` on its own would return `-Infinity`, so we check for that.
   */
  let maxId = allIds.length > 0 ? Math.max(...allIds) : 0;

  // The new ID is the biggest existing ID plus one.
  newMember.id = maxId + 1;

  // The `req.body` from the form gives us keys like `member_name`.
  // Our `data.json` file expects keys like `name`.
  // So, we need to map the form data to our desired object structure.
  // (We could also have just named the form inputs `name`, `phone`, etc. to avoid this step!)
  const formattedMember = {
    id: newMember.id,
    name: req.body.member_name,
    phone: req.body.member_phone,
    email: req.body.member_email,
    address: req.body.member_address,
    is_active: req.body.member_active === 'on' ? true : false // HTML checkboxes send 'on' if checked, so we convert this to a boolean `true` or `false`.
  };

  // Add our newly created and formatted member to the end of our existing members array.
  existingData.push(formattedMember);

  // --- SAVING THE DATA BACK TO THE FILE ---
  const finalJsonString = JSON.stringify(existingData, null, 2); // Convert the whole updated array back to a pretty JSON string.
  fs.writeFileSync('data/data.json', finalJsonString, 'utf8'); // Write the new string to the file, overwriting the old one.

  // `res.redirect('/member')`
  // After we're done creating and saving the new member, we don't want to just sit here on a blank page.
  // `redirect` tells the user's browser: "Okay, you're done here. Now, please go to the '/member' page."
  // This makes the user's browser automatically navigate to the main members list, where they'll see the new member they just added.
  res.redirect('/member');
});


// =============================================================================================
// ROUTE 4: DELETE A MEMBER
// URL: /member/delete/:id (e.g., /member/delete/3)
// Method: GET (Note: For deleting data, a DELETE method is more appropriate, but GET is simpler for a beginner example with links)
// =============================================================================================
router.get('/delete/:id', (req, res) => { // When a GET request is made to this URL...

  // First, get the ID of the member to delete from the URL parameter.
  // Remember to turn it from a string into a number with `parseInt`.
  const memberIdToDelete = parseInt(req.params.id);

  // Read all the current members from the file.
  const allMembers = readData();

  // `Array.filter()` is the perfect tool for this job.
  // It creates a NEW array containing only the elements that pass a test.
  // Our test is `member.id !== memberIdToDelete`.
  // So, it will go through `allMembers` and keep every member whose ID does NOT match the one we want to delete.
  const remainingMembers = allMembers.filter(member => member.id !== memberIdToDelete);

  // --- SAVING THE FILTERED DATA BACK TO THE FILE ---
  const finalJsonString = JSON.stringify(remainingMembers, null, 2); // Convert our new, filtered array into a pretty JSON string.
  fs.writeFileSync('data/data.json', finalJsonString, 'utf8'); // Overwrite the old file with our new, shorter list.

  // Finally, redirect the user back to the main member list to see the result.
  res.redirect('/member');
});


// STEP 4: EXPORTING THE ROUTER
// This is the final and very important step.
// `module.exports = router;` packages up our entire `router` object (with all the GET and POST routes we defined)
// and makes it available to be imported and used by other files in our project, specifically our main `app.js` file.
// It's like putting all your tools back in the toolbox and handing it to the main builder.
module.exports = router;
