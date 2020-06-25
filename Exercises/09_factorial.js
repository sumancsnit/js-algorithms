// Iterative Solution
const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

factorial(5);

// Recursive Solution
const factorialR = (n) => (n < 2 ? 1 : n * factorialR(n - 1));

factorialR(5);
