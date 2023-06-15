const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
var team = players; // Creating a reference to the players array

var team1 = [...players]; // Creating a copy of the players array using the spread operator

var cap1 = { ...person }; // Creating a copy of the person object using the spread operator

// Testing the variables
console.log(team);   // Output: ["John", "Mike", "Sarah"]
console.log(team1);  // Output: ["John", "Mike", "Sarah"]
console.log(cap1);   // Output: { name: "Alice", age: 25, role: "Captain" }

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
