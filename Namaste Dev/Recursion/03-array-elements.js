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
