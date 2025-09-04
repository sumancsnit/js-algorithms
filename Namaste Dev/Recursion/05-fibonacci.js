/**
 * LeetCode Problem #509: Fibonacci Number
 * Link: https://leetcode.com/problems/fibonacci-number/
 * 
 * The Fibonacci numbers, commonly denoted F(n) form a sequence where:
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1
 * 
 * Time Complexity: O(2^n) - exponential, as each call spawns two more recursive calls
 * Space Complexity: O(n) - due to recursion stack depth
 * 
 * Example:
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
 */

const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Example usage:
console.log(fibonacci(4));  // Output: 3
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(6));  // Output: 8

/**
 * Dry run for fibonacci(4):
 *                     fib(4)
 *                   /        \
 *              fib(3)        fib(2)
 *             /      \       /    \
 *        fib(2)   fib(1)  fib(1) fib(0)
 *        /    \     |       |      |
 *    fib(1) fib(0)  1       1      0
 *      |      |
 *      1      0
 * 
 * Result: 3 (1 + 0 + 1 + 0 + 1 = 3)
 */