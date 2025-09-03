/**
 * Recursively calculates the sum of the first n natural numbers.
 *
 * Example:
 * Input: sumOfFirstNNumbers(5)
 * Output: 15
 * Explanation: 5 + 4 + 3 + 2 + 1 + 0 = 15
 */

const sumOfFirstNNumbers = (n) => {
  if (n < 0) throw new Error('Input must be a non-negative integer');
  if (n === 0) return 0;
  return n + sumOfFirstNNumbers(n - 1);
};

// Example usage:
console.log(sumOfFirstNNumbers(5)); // Output: 15
console.log(sumOfFirstNNumbers(0)); // Output: 0
