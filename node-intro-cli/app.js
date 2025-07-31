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
let surfSpots = ["Uluwatu", "Padang Padang", "Keramas"];

console.log("Current surf spots:", surfSpots);

// Now, let's ask the user for a new spot.
// The 'question' method displays a prompt and then waits for user input.
rl.question("What's another sick surf spot you wanna add? ", (newSpot) => {
  // Once the user types something and hits Enter, this function runs.
  // 'newSpot' will hold whatever they typed.

  // Check if the input isn't just empty space.
  if (newSpot.trim() !== "") {
    // Slay! Add the new spot to the array.
    surfSpots.push(newSpot.trim()); // .trim() removes any extra spaces at the start/end
    console.log(`Gnarly! '${newSpot.trim()}' added to the list.`);
  } else {
    console.log("No worries, didn't add an empty spot.");
  }

  // Show off the updated list.
  console.log("Updated surf spots:", surfSpots);

  // Super important: close the readline interface when you're done.
  // If you don't, your script will just hang around like a grommet waiting for waves.
  rl.close();
});

// You'll see this message right after the question, before you type your answer.
console.log("\nWaiting for your input, chief...");
