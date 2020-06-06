// Function 1

const logPairsOfArray = (array) => {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      console.log(`${array[i]}${array[j]}`);
    }
  }
}

logPairsOfArray([1,5,6])

// O(n^2)

// Function 2

const printAllPairsSum = (array) => {
  array.forEach(e => console.log(e));

  array.forEach(ele => {
    array.forEach(el => console.log(ele + el));
  })
}

printAllPairsSum([1,2,3]);

// Rule: Drop Non Dominants
// O(n + n^2) --> O(n^2)