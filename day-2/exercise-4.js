// Destructure an object
//
// 1. Destructure the following values from the
//    object:
//    - firstName
//    - isAdmin
//    - branchName (nested in location)

const person = {
  firstName: "Michael",
  lastName: "Scott",
  position: "Regional Manager",
  isAdmin: true,
  age: 40,
  location: {
    coordinates: [104, 200],
    branchName: "Scranton",
  },
};

let {
  firstName, 
  isAdmin,
  location: {
    coordinates,
    branchName
  }
} = person

console.log(firstName)
console.log(isAdmin)
console.log(branchName)