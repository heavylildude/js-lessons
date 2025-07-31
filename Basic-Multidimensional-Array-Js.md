# Welcome to Multidimensional Arrays, brah!
It's basically an array where each element is *another* array. Imagine a spreadsheet: rows are the outer array, and columns within each row are the inner arrays. This is where things get a bit more complex, but the power you get is straight-up wild. Think of it like a spreadsheet in your code—arrays within arrays. It's perfect for stashing data like our surf sessions.

Each inner array is one session: [Spot, Date, Wave Height (feet), Swell Direction]
```
const surfSessions = [
  ["Uluwatu", "2025-07-28", 8, "SW"],
  ["Padang Padang", "2025-07-27", 6, "S"],
  ["Keramas", "2025-07-28", 7, "SE"],
  ["Dreamland", "2025-07-26", 4, "SW"],
  ["Bingin", "2025-07-27", 5, "S"],
  ["Uluwatu", "2025-07-25", 9, "SW"], // Another session at Uluwatu
  ["Keramas", "2025-07-26", 6, "SE"]
];

console.log("--- All Surf Sessions ---");
console.log(surfSessions);
console.log("\n"); // Just for some spacing, keeps it clean.
```

### Iterating with Nested for Loops
To get to every single bit of data, you gotta use nested for loops. The outer loop grabs each surf session (the row), and the inner loop dives into the details of that session (the columns).

```
console.log("--- Detailed Look at Each Surf Session ---");

// Outer loop: iterates through each surf session array.
for (let i = 0; i < surfSessions.length; i++) {
  const session = surfSessions[i]; // Get the current session array.
  console.log(`Session ${i + 1}:`); // Just a counter for readability.

  // Inner loop: iterates through the details of the current session.
  for (let j = 0; j < session.length; j++) {
    const detail = session[j]; // Get the specific detail (spot, date, height, etc.).

    // We can use a switch or if/else to label the details for clarity.
    switch (j) {
      case 0:
        console.log(`  Spot: ${detail}`);
        break;
      case 1:
        console.log(`  Date: ${detail}`);
        break;
      case 2:
        console.log(`  Wave Height: ${detail} ft`);
        break;
      case 3:
        console.log(`  Swell Direction: ${detail}`);
        break;
      default:
        console.log(`  Unknown Detail: ${detail}`);
    }
  }
  console.log("---"); // Separator for each session.
}

console.log("\n"); // More spacing.
```

### Filtering Your Data
This is where it gets real handy. You can use for loops and if statements to filter through your data and find exactly what you're looking for. Say, all the epic sessions with gnarly waves, or every time you surfed at a certain spot.
```
const epicSessions = []; // Array to store sessions that meet our criteria.
const targetWaveHeight = 7; // We're looking for waves 7ft or bigger.

console.log(`--- Filtering for Sessions with Waves >= ${targetWaveHeight} ft ---`);

for (let i = 0; i < surfSessions.length; i++) {
  const session = surfSessions[i];
  const waveHeight = session[2]; // Wave height is at index 2.

  if (waveHeight >= targetWaveHeight) {
    epicSessions.push(session); // If it's epic, push the whole session.
  }
}

if (epicSessions.length > 0) {
  console.log("Found these gnarly sessions:");
  epicSessions.forEach(session => {
    console.log(`  - ${session[0]} on ${session[1]} with ${session[2]} ft waves from ${session[3]}`);
  });
} else {
  console.log("Bummer, no sessions found with waves that big today.");
}

console.log("\n"); // More spacing.

// Let's try another filter: find all sessions at a specific spot.
const uluwatuSessions = [];
const targetSpot = "Uluwatu";

console.log(`--- Filtering for Sessions at ${targetSpot} ---`);

for (let i = 0; i < surfSessions.length; i++) {
  const session = surfSessions[i];
  const spotName = session[0]; // Spot name is at index 0.

  if (spotName === targetSpot) {
    uluwatuSessions.push(session);
  }
}

if (uluwatuSessions.length > 0) {
  console.log(`Found these sessions at ${targetSpot}:`);
  uluwatuSessions.forEach(session => {
    console.log(`  - On ${session[1]} with ${session[2]} ft waves from ${session[3]}`);
  });
} else {
  console.log(`No sessions found at ${targetSpot}. Maybe try another spot?`);
}

// Pro tip for later: JavaScript also has built-in array methods like `.filter()`
// which can make filtering even more concise, but understanding the 'for' loop
// way is fundamental, especially for complex nested structures.
// Example using .filter() (just for show, we used for loops above!):
// const bigWavesFilter = surfSessions.filter(session => session[2] >= targetWaveHeight);
// console.log("Using .filter() (just for comparison):", bigWavesFilter);
```
