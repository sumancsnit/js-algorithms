/**
 * LeetCode Problem #485: Max Consecutive Ones
 * Link: https://leetcode.com/problems/max-consecutive-ones/
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 * Example:
 * Input: [1,1,0,1,1,1]
 * Output: 3
 */

const findMaxConsecutiveOnes = (nums) => {
  let max = 0,
    curr = 0;
  for (const num of nums) {
    if (num === 1) {
      curr++;
    } else {
      max = Math.max(max, curr);
      curr = 0;
    }
  }
  return Math.max(max, curr);
};

// Example usage:
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output:
