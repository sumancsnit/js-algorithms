// find unique elements in array, no duplicate
const arr1 = [11, 22, 33, 44, 55, 11, 44];
// output should be [11, 22, 33, 44, 55]

const arrayRemoveDuplicate = (array) => [...new Set(array)];

arrayRemoveDuplicate(arr1);

// solution 2 without inbuilt methods

const arrayRemoveDuplicate2 = (array) => {
  let uniqueArray = [];
  for (let i of array) {
    if (uniqueArray.indexOf(i) === -1) {
      uniqueArray.push(i);
    }
  }
  return uniqueArray;
};

arrayRemoveDuplicate2(arr1);
