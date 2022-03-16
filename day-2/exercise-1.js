// Array.map
//
// 1. Use the array map method to return only the first names
// 2. Chain a 'join()' afterwards so that the values are
//    separated with a space:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Your expected output should be:
// Michael Dwight Jim
const people = [
  {
    firstName: "Michael",
    lastName: "Scott",
    position: "Regional Manager",
  },
  {
    firstName: "Dwight",
    lastName: "Schrute",
    position: "Assistant to the Regional Manager",
  },
  {
    firstName: "Jim",
    lastName: "Halpert",
    position: "Salesman",
  },
];

const result = people.map(function(element) {
  return element.firstName
}).join(" ") // Write your answer here

// Do not remove this and do not change the
//    variable 'result' name above. It's
//    used for the tests.
module.exports = result;
