const findSecondLargest = (arr) => {
  if (arr.length < 2) return null; // Not enough elements

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? null : secondMax;
};

const list = [3, 7, 12, 5, 9, 1, 8, 4, 12, 6];
console.log(findSecondLargest(list)); // 9

// solution 2

const findSecondLargest2 = (arr) => {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
};

console.log(findSecondLargest2(list)); // 9
console.log(findSecondLargest2([5, 5, 5])); // null
console.log(findSecondLargest2([42])); // null
console.log(findSecondLargest2([])); // null
