// Rule 1 : Worst Case (Check for worst case)
// Rule 2 : Remove Constants
// Rule 3 : Different terms for inputs
// Rule 4 : Drop Non Dominants

// Rule 2 : Remove Constants

// O(5 + n)  -> O(n)
// O(7 + n/2)   => O(n)

const logTwice = (array) => {
  array.forEach((e) => console.log(e)); //o(n)
  array.forEach((e) => console.log(e)); // O(n)
};

// O(2n) or O(n) graph line will be liner in this case also

const logTwoArg = (arr1, arr2) => {
  arr1.forEach((e) => console.log(e));
  arr2.forEach((e) => console.log(e));
};

// two seperate inputs
// O(a + b)
// two seperate inputs use +
// two input and nested loops use *

const logTwoArg2 = (arr1, arr2) => {
  arr1.forEach((e) => {
    console.log(e);
    arr2.forEach((e) => console.log(e));
  });
};

// O(a*b) for nested loop use *

// Function 1

const logPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`${array[i]}${array[j]}`);
    }
  }
};

logPairsOfArray([1, 5, 6]);

// O(n^2)

// Function 2

const printAllPairsSum = (array) => {
  array.forEach((e) => console.log(e));

  array.forEach((ele) => {
    array.forEach((el) => console.log(ele + el));
  });
};

printAllPairsSum([1, 2, 3]);

// Rule: Drop Non Dominants
// O(n + n^2) --> O(n^2)

// Space Complexity
// What causes space complexity
// 1. Variables
// 2. Data Structures
// 3. Function Calls
// 4. Allocations

// example of space complexity

const createArrayNTimes = (n) => {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
    // it will push an element each time, so space complexity is O(n)
  }
  return hiArray;
};

console.log(createArrayNTimes(7));
