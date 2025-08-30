/**
 * LeetCode Question: Merge Sorted Array
 * Link: https://leetcode.com/problems/merge-sorted-array/
 *
 * Given two sorted arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * nums1 has enough space (size m + n) to hold additional elements from nums2.
 * The final sorted array should be stored in nums1.
 *
 * Example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 */

const mergeSortedArray = function (nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1's valid elements
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for placement in nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
mergeSortedArray(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2,
