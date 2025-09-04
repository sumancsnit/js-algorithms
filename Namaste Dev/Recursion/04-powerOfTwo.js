/**
 * LeetCode Problem #231: Power of Two
 * Link: https://leetcode.com/problems/power-of-two/
 *
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2^x.
 *
 * Example:
 * Input: n = 16
 * Output: true
 * Explanation: 2^4 = 16
 *
 * Input: n = 3
 * Output: false
 */

const isPowerOfTwo = (n) => {
  if (n === 1) return true;
  if (n < 1 || n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
};

// Example usage:
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3));  // Output: false
console.log(isPowerOfTwo(1));  // Output: true
console.log(isPowerOfTwo(0));  // Output: false

/**
 * Explanation:
 * 1. Base cases:
 *    - If n === 1, return true (2^0 = 1)
 *    - If n < 1 or n is odd, return false
 * 2. Recursive case:
 *    - Divide n by 2 and check if result is a power of 2
 * 
 * Dry run for n = 16:
 * isPowerOfTwo(16) -> isPowerOfTwo(8)
 *                  -> isPowerOfTwo(4)
 *                  -> isPowerOfTwo(2)
 *                  -> isPowerOfTwo(1)
 *                  -> true
 */