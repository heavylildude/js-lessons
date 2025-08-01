**🌊🏄‍♂️ Surf's Up! 🏄‍♂️🌊**

### **How to Catch the Perfect Wave (Run Your App)**

To get stoked and start riding the waves of awesomeness, follow these gnarly steps:

1. **Grommet Mode**: Open your terminal and navigate to the directory where you want to run your app.
2. **Node App Start**: Type `node` followed by the name of your JavaScript file (e.g., `app.js`) to kick off your surf session.

**🔥 Run Your App 🔥**

```bash
node app.js
```

### **Reading the Waves (Understanding Your Code)**

Here's a breakdown of what's happening in your code, bro:

#### 🌊 Importing the 'readline' Module

```javascript
const readline = require('readline');
```

This line lets you read input from the terminal like a pro, dude.

#### 🤖 Creating an Interface for Reading Input and Writing Output

```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

It's like setting up a direct line to talk to the user, bro!

#### 🌴 Your Initial List of Epic Surf Spots

```javascript
let surfSpots = ["Uluwatu", "Padang Padang", "Keramas"];
```

This is where you store your initial list of sick surf spots, dude.

#### 🤔 Asking the User for a New Spot

```javascript
rl.question("What's another sick surf spot you wanna add? ", (newSpot) => {
  // ...
});
```

When you run your app, it'll ask the user to input a new surf spot, bro!

#### 💪 Checking if the Input is Not Empty Space

```javascript
if (newSpot.trim() !== "") {
  // Add the new spot to the array.
}
```

If the user types something other than empty space, you add it to the list, dude!

#### 🌊 Showing Off the Updated List

```javascript
console.log("Updated surf spots:", surfSpots);
```

After adding the new spot, your app shows off the updated list, bro!

### **Closing the Readline Interface**

```javascript
rl.close();
```

When you're done with your surf session, close the readline interface to avoid hanging around like a grommet waiting for waves.

**🌊 Stoked to Help You Catch Some Waves! 🏄‍♂️**
