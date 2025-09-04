/**
 * Prints numbers from 1 to num using recursion.
 * This demonstrates a basic recursive function that prints each number in order.
 *
 * Example:
 * Input: rec(5)
 * Output:
 * 1
 * 2
 * 3
 * 4
 * 5
 */

const printNumbersRecursively = (num, curr = 1) => {
  if (curr > num) return;
  console.log(curr);
  printNumbersRecursively(num, curr + 1);
};

// Example usage:
printNumbersRecursively(9);

/**
 * Recursively calculates the factorial of a number.
 * 
 * Example:
 * Input: factorial(5)
 * Output: 120
 * Explanation: 5 * 4 * 3 * 2 * 1 = 120
 */
const factorial = (n) => {
    if (n < 0) throw new Error('Input must be a non-negative integer');
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

// Example usage:
console.log(factorial(5));  // Output: 120
console.log(factorial(3));  // Output: 6
console.log(factorial(0));  // Output: 1

/**
 * Dry run for factorial(5):
 * factorial(5) => 5 * factorial(4)
 *              => 5 * (4 * factorial(3))
 *              => 5 * (4 * (3 * factorial(2)))
 *              => 5 * (4 * (3 * (2 * factorial(1))))
 *              => 5 * (4 * (3 * (2 * 1)))
 *              => 5 * (4 * (3 * 2))
 *              => 5 * (4 * 6)
 *              => 5 * 24
 *              => 120
 */