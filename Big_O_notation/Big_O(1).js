
const name = ['suman']

const allnames = new Array(1000).fill('Kumar')

const logFirstElemnt = (array) => {
console.log(array[0])
}

const logTwoElemnt = (array) => {
console.log(array[0]) //o(1)
console.log(array[1]) //o(1) total two operation in all case - O(2) or O(n)
}


logFirstElemnt(allnames) // O(n) Constant Time
logTwoElemnt(allnames) // O(n) Constant Time


// Example 3

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; O(1) // O(1)
}

// Big O(3 + 4n) ie: O(n)