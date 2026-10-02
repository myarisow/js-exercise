

//for in

const peaple = [ 
  { name: "Alice", age: 25, city: "Wonderland"}, 
  { name: "Bob", age: 30, city: "Buildland"}, 
  { name: "Charlie", age: 35, city: "Chocolate Factory"}
];

console.log("Properties and values of each person:");

peaple.forEach((person, index) => {

  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  if (index < peaple.length - 1) {
    console.log("---");
  }
});



