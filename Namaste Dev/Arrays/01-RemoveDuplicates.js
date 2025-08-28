/**
 * LeetCode Question: Remove Duplicates from Sorted Array
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?source=submission-ac
 *
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once
 * and return the new length. Do not allocate extra space for another array; you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * Example:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 *
 * The function should return the length of the array after removing duplicates.
 */

var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[x] < nums[i]) {
      x += 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};
