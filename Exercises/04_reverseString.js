// Create a function that reverse a string:

// solution 1
const reverseString = (string) => string.split('').reverse().join('');

const reverseStr = (string) => [...string].reverse().join('');

// solution 2  for of loop
const reverseString2 = (string) => {
  if (!string || string.length < 2 || typeof string != 'string') return string;

  const reversed = [];
  for (let i of string) {
    reversed.unshift(i);
  }
  return reversed.join('');
};

// solution 3 for loop
const reverseString3 = (string) => {
  const reversed = [];
  const length = string.length - 1;
  for (let i = length; i >= 0; i--) {
    reversed.push(string[i]);
  }
  return reversed.join('');
};

reverseString('suman');
reverseStr('suman');
reverseString2('suman');
reverseString3('suman');
