/**
 * LeetCode Problem #88: Merge Sorted Array
 * URL: https://leetcode.com/problems/merge-sorted-array/description/
 *
 * Problem Statement:
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored
 * inside the array nums1. To accommodate this, nums1 has a length of m + n, where the
 * first m elements denote the elements that should be merged, and the last n elements
 * are set to 0 and should be ignored. nums2 has a length of n.
 *
 * @param {number[]} nums1 - First sorted array with extra space at the end
 * @param {number} m - Number of actual elements in nums1 (excluding extra spaces)
 * @param {number[]} nums2 - Second sorted array to merge
 * @param {number} n - Number of elements in nums2
 * @returns {number[]} - The merged sorted array (nums1 is modified in-place)
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(m) - for the copy of nums1
 *
 * Tags: Array, Two Pointers, Sorting
 * Difficulty: Easy
 */
function mergeSortedArrays(nums1, m, nums2, n) {
  // Edge cases: handle empty arrays
  if (n === 0) return nums1; // If nums2 is empty, nums1 is already sorted
  if (m === 0) {
    // If nums1 is empty, copy all elements from nums2
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return nums1;
  }

  // Create a copy of the first m elements of nums1
  // This is necessary because we'll be overwriting nums1 during the merge
  const nums1Copy = nums1.slice(0, m);

  // Two pointers approach:
  // p1 points to current element in nums1Copy (original nums1 elements)
  // p2 points to current element in nums2
  let p1 = 0; // Pointer for nums1Copy
  let p2 = 0; // Pointer for nums2

  // Merge elements from both arrays into nums1
  // We iterate through all positions in the final merged array
  for (let i = 0; i < m + n; i++) {
    // Get current elements from both arrays (or undefined if pointer is out of bounds)
    const p1Element = nums1Copy[p1];
    const p2Element = nums2[p2];

    // Decide which element to place at position i:
    // 1. If we've exhausted nums2 (p2 >= n), take from nums1Copy
    // 2. If we haven't exhausted nums1Copy (p1 < m) AND nums1Copy element is smaller, take from nums1Copy
    // 3. Otherwise, take from nums2
    if (p2 >= n || (p1 < m && p1Element <= p2Element)) {
      nums1[i] = p1Element;
      p1++; // Move nums1Copy pointer forward
    } else {
      nums1[i] = p2Element;
      p2++; // Move nums2 pointer forward
    }
  }

  return nums1; // Return the modified nums1 array
}

// Example usage and test cases based on LeetCode examples:
console.log('=== LeetCode #88: Merge Sorted Array Solutions ===\n');

// Test Case 1: Standard case
const test1_nums1 = [7, 8, 9, 0, 0, 0];
const test1_result = mergeSortedArrays(test1_nums1, 3, [2, 5, 6], 3);
console.log('Test 1 - Standard merge:');
console.log('Input: nums1=[7,8,9,0,0,0], m=3, nums2=[2,5,6], n=3');
console.log('Output:', test1_result);
console.log('Expected: [2,5,6,7,8,9]\n');

// Test Case 2: First array is larger
const test2_nums1 = [1, 2, 3, 0, 0, 0];
const test2_result = mergeSortedArrays(test2_nums1, 3, [2, 5, 6], 3);
console.log('Test 2 - Overlapping values:');
console.log('Input: nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3');
console.log('Output:', test2_result);
console.log('Expected: [1,2,2,3,5,6]\n');

// Test Case 3: Empty second array
const test3_nums1 = [1, 2, 3];
const test3_result = mergeSortedArrays(test3_nums1, 3, [], 0);
console.log('Test 3 - Empty nums2:');
console.log('Input: nums1=[1,2,3], m=3, nums2=[], n=0');
console.log('Output:', test3_result);
console.log('Expected: [1,2,3]\n');

// Test Case 4: Empty first array
const test4_nums1 = [0, 0, 0];
const test4_result = mergeSortedArrays(test4_nums1, 0, [1, 2, 3], 3);
console.log('Test 4 - Empty nums1 (only zeros):');
console.log('Input: nums1=[0,0,0], m=0, nums2=[1,2,3], n=3');
console.log('Output:', test4_result);
console.log('Expected: [1,2,3]\n');

// solution 2

const merge = (nums1, m, nums2, n) => {
  // Initialize two pointers at the end of the actual elements in nums1 and nums2
  let p1 = m - 1; // Pointer for last element in nums1's initial part
  let p2 = n - 1; // Pointer for last element in nums2

  // Start filling nums1 from the very end (index m + n - 1) going backwards
  for (let i = m + n - 1; i >= 0; i--) {
    // If nums2 is exhausted (p2 < 0) OR
    // nums1's current element is greater than nums2's current element
    if (p2 < 0 || (p1 >= 0 && nums1.at(p1) > nums2.at(p2))) {
      // Place nums1's element at position i
      nums1[i] = nums1.at(p1);
      // Move p1 pointer leftward
      p1--;
    } else {
      // Otherwise place nums2's element at position i
      nums1[i] = nums2.at(p2);
      // Move p2 pointer leftward
      p2--;
    }
  }
  // At the end, nums1 contains all elements from nums1 and nums2 in sorted order
};
