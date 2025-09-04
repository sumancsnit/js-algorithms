/**
 * Recursively calculates the sum of all elements in an array.
 *
 * Example:
 * Input: sum([1, 2, 3, 4])
 * Output: 10
 * Explanation: 1 + 2 + 3 + 4 = 10
 */

const sum = (arr, i = 0) => {
  if (i === arr.length - 1) return arr[i];
  return arr[i] + sum(arr, i + 1);
};

// Example usage:
console.log(sum([1, 2, 3, 4])); // Output: 10

/**
 * Recursively calculates the sum of all odd numbers in an array.
 *
 * Example:
 * Input: sumOfOddNumbers([1, 2, 3, 4, 5])
 * Output: 9
 * Explanation: 1 + 3 + 5 = 9 (only odd numbers are summed)
 */

const sumOfOddNumbers = (arr, i = 0) => {
  // Base case: if index is out of bounds
  if (i >= arr.length) return 0;

  const current = arr[i];
  const isOdd = current % 2 !== 0;

  // Base case: for last element
  if (i === arr.length - 1) {
    return isOdd ? current : 0;
  }

  // Recursive case: add current number if odd
  return (isOdd ? current : 0) + sumOfOddNumbers(arr, i + 1);
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfOddNumbers(numbers)); // Output: 9
console.log(sumOfOddNumbers([2, 4, 6, 8])); // Output: 0
console.log(sumOfOddNumbers([1, 3, 5, 7]));
