/**
 * LeetCode Problem #268: Missing Number
 * Link: https://leetcode.com/problems/missing-number/
 *
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * Example:
 * Input: [3,0,1]
 * Output: 2
 */

const missingNumber = (nums) => {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);
  return totalSum - actualSum;
};

// Example usage:
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
