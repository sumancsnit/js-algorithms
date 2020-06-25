// find second largest number form array
const arraySecondLargestNo = (array) =>
  [...new Set(array)].sort((a, b) => b - a)[1];

arraySecondLargestNo([1, 5, 6, 8, 8, 6, 9, 7]);
