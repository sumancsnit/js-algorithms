// find common element in two array
const arr1 = [11, 22, 33, 44, 55];
const arr2 = [75, 15, 25, 11, 22];
// should return [11,22]

const findCommonEle = (array1, array2) =>
  array1.filter((e) => array2.includes(e));

findCommonEle(arr1, arr2);
