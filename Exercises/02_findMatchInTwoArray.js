// Given two array, create a function that let's a user know (true/false) wether these two arrays contain any common items.

// example
const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = ['w', 'x', 'y', 'a'];
// should return true

// example
const array3 = ['a', 'b', 'c', 'd', 'e'];
const array4 = ['w', 'x', 'y', 'z'];
// should return false

// 2 parameter - arrays -no size limit
// return true/false

// solution 1

const contailsCommonItems = (arr1, arr2) => {
  for (let eleArr1 of arr1) {
    for (let eleArr2 of arr2) {
      if (eleArr1 === eleArr2) return true;
    }
  }
  return false;
};

console.log(contailsCommonItems(array1, array2)); 
// O(a*b)
// space complexity O(1) we are not creating any variable

// solution 2

const contailsCommonItems2 = (arr1=[], arr2=[]) => {
  // loop through first array and create object where properties === items in the array
  let match = {}
  for (let i of arr1) {
    if (!match[i]) match[i] = true
  }
  // loop through second array and check if item in second array exists on created object
  for (let i of arr2) {
    if (match[i]) return true
  }
  return false
}

console.log(contailsCommonItems2(array1, array2)) 
// O(a + b)
// space complexity O(n) we are creating an object




// Solution 3

contailsCommonItems3 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item))
}


console.log(contailsCommonItems3(array1, array2)) 