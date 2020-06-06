// Calculates the sum of all numbers from 1 up to (and including) come number n

// check
// 1. Faster
// 2. Less memory-intensive
// 3. More readable

// solution 1

const addUpToN = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

let t1 = performance.now();
addUpToN(989898);
let t2 = performance.now();

console.log(`Time Elapsed ${(t2 - t1) / 1000} seconds`);

// solution 2

const addUpToN_2 = (n) => (n * (n + 1)) / 2;

let t1 = performance.now();
addUpToN(989898);
let t2 = performance.now();

console.log(`Time Elapsed ${(t2 - t1) / 1000} seconds`);

// solution 2 is faster
// Counting Operations - solution 2 has less operations (* + /) without loop
// suman
