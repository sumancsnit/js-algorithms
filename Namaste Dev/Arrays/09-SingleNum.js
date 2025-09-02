/**
 * LeetCode Problem #136: Single Number
 * Link: https://leetcode.com/problems/single-number/
 *
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one.
 *
 * Example:
 * Input: [2,2,1]
 * Output: 1
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 */

const singleNumber = (nums) => {
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  for (const key in count) {
    if (count[key] === 1) return Number(key);
  }
};

// Example usage:
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output:
