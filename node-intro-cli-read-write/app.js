// First up, we gotta import the 'readline' module.
// This bad boy lets us read input line by line from the terminal.
const readline = require('readline');

// Create an interface for reading input and writing output.
// It's like setting up a direct line for your app to talk to the user.
const rl = readline.createInterface({
  input: process.stdin,  // This is where the input comes from (your keyboard)
  output: process.stdout // This is where the output goes (your terminal screen)
});

// Your initial list of epic surf spots, brah.
let surfSpots = ["Uluwatu", "Padang Padang", "Keramas"].map(spot => spot.toLowerCase());
let actions = [];

console.log("Current surf spots:", surfSpots);

// Now, let's ask the user for a new spot.
// The 'question' method displays a prompt and then waits for user input.
rl.question("Type add your_new_sick_surf_spot to add new or delete spot_name to delete:\n\nWaiting for your input, chief...\n>_ ", (input) => {
  // Once the user types something and hits Enter, this function runs.
  // 'newSpot' will hold whatever they typed.

  let command = input.trim().toLowerCase();
  
  // Check if the command starts with "add" and extract the spot name after "add ".
  if (command.startsWith("add ")) {
    let newSpot = command.substring(4).trim(); // Extract the spot name
    surfSpots.push(newSpot.toLowerCase()); // Add the new spot to the array, converting it to lowercase for case-insensitivity
    actions.push(`Added '${newSpot}'`); // Log the action in the actions array
    console.log(`Gnarly! '${newSpot}' added to the list.`); // Notify the user that the surf spot was added
  } 
  // Check if the command starts with "delete" and extract the spot name after "delete ".
  else if (command.startsWith("delete ")) {
    let deleteSpot = command.substring(7).trim(); // Extract the spot name
    deleteSpot = deleteSpot.toLowerCase(); // Convert the spot name to lowercase for case-insensitivity
    if (surfSpots.includes(deleteSpot)) { // Check if the surf spot exists in the array
      surfSpots.splice(surfSpots.indexOf(deleteSpot), 1); // Remove the surf spot from the array
      actions.push(`Deleted '${deleteSpot}'`); // Log the action in the actions array
      console.log(`Surf spot '${deleteSpot}' deleted from the list.`); // Notify the user that the surf spot was deleted
    } else {
      actions.push(`No worries, '${deleteSpot}' not found in the list.`); // Log the action in the actions array
      console.log(`No worries, '${deleteSpot}' not found in the list.`); // Notify the user that the surf spot wasn't found
    }
  } 
  // If the command doesn't start with "add" or "delete", notify the user.
  else if (command !== "") {
    actions.push("Start by typing 'add' or 'delete' to add or delete a surf spot."); // Log the action in the actions array
    console.log("Start by typing 'add' or 'delete' to add or delete a surf spot."); // Notify the user about proper usage
  }

  // Show off the updated list of surf spots.
  console.log("\nUpdated surf spots:", surfSpots);

  // Display all actions that have been taken.
  console.log("\nActions:");
  actions.forEach((action, index) => {
    console.log(`${index + 1}. ${action}`); // Log each action with a number
  });

  // Super important: close the readline interface when you're done.
  // If you don't, your script will just hang around like a grommet waiting for waves.
  rl.close();
});