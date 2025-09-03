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
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
