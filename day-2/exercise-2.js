// Array.filter
//
// 1. Filter out the list so that we have:
//   - All users above the age of 35
//   - All users that are admin (isAdmin is true)
// Expected output:
// [
//   {
//     firstName: 'Michael',
//     lastName: 'Scott',
//     position: 'Regional Manager',
//     isAdmin: true,
//     age: 40
//   }
// ]

const people = [
  {
    firstName: "Michael",
    lastName: "Scott",
    position: "Regional Manager",
    isAdmin: true,
    age: 40,
  },
  {
    firstName: "Dwight",
    lastName: "Schrute",
    position: "Assistant to the Regional Manager",
    isAdmin: true,
    age: 30,
  },
  {
    firstName: "Jim",
    lastName: "Halpert",
    position: "Salesman",
    isAdmin: false,
    age: 30,
  },
  {
    firstName: "Pam",
    lastName: "Beesly",
    position: "Receptionist",
    isAdmin: false,
    age: 30,
  },
];

const result = people.filter(function(element) {
  return element.age >= 40 && element.isAdmin
}); // Write your answer here

console.log(result)

// Do not remove this and do not change the
//    variable 'result' name above. It's
//    used for the tests.
module.exports = result;
