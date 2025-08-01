# Intermediate File Read & Write File Read & Write Operations

Gnarly! 👏 You've just landed on the homepage of our member management system 🤙‍♂️. This is where you'll find all the juicy deets about how this app came to be, and what makes it so stoked 🤩.

### Project Overview 📈
This project is built using Node.js 🌟, Express.js 🎸, and a dash of JavaScript magic ✨. We're talkin' file read and write operations using JSON, baby! 📁

### 🏄‍♂️ Node.js Grommet Zone

####Getting Started 🚀
To get this party started, you'll need to:
1. **Clone the repo** download and extract or using git clone 📦
2. **Navigate into the project folder** using cd 📍
3. **Install the dependencies** using npm install 💼
4. **Start the server** using node app.js 🌟
*still remember to do all the steps above? 🎉*


Here's a breakdown of what you'll find in this folder:
1. **app.js**: The main application file, where all the magic happens 🔮
2. **data.json**: Where we store our member data and make it accessible to the rest of the app 📁
3. **routes/member.js**: Our Express.js route for handling member-related requests 🌐
4. **views/member.html**: Our HTML template for displaying member details 🌟
5. **server.js**: The main server file, where we set up our Express server 🌟

## 🏄‍♂️ What’s Inside Each File?
Each file is responsible for a specific aspect of the project. Here's a breakdown:


### API Endpoints 🌐
We've got one API endpoint:
1. /members: Returns a list of all members in JSON format 📝
2. /member/:id: Returns a single member's details in JSON format 👥

### File Read and Write Operations 💻
In routes/member.js, we're using fs to read and write data from/to data/data.json. We've got the following functions:
readData(): Reads data from data/data.json and returns it as a JavaScript array 📁
fs.writeFileSync(): Writes data to data/data.json or appends to it, respectively.
