const express = require('express');
const router = express.Router();
const fs = require('fs');

// Function to read data from data.json
function readData() {
  const data = fs.readFileSync('data/data.json', 'utf8');
  return JSON.parse(data);
}

// Read the data when the router is initialized
const membersData = readData();
// Route to display the members
router.get('/', (req, res) => { // the root of member, described in app.js as /member, so anything inside this will have /member as root
  res.render('member', { members: membersData }); // render the view/member.ejs as ~/member --> and pass membersData as members
});

// Route for a single member (example - you'd likely have a way to select a member), so anything inside this will have /member as root
router.get('/:id', (req, res) => { // the root of member, described in app.js as /member
  const memberId = req.params.id;
  const selectedMember = membersData.find(member => member.id === parseInt(memberId)); // this is find in member ==> member.id (but parse as interger)

  if (selectedMember) { // if selected member exists
    res.render('member_detail', { member: selectedMember }); // render the view/member_detail.ejs as ~/member/:id --> and pass membersData as members
  } else {
    res.status(404).send('Member not found');
  }
  
});

module.exports = router;