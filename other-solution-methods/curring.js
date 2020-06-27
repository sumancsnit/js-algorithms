const curriedMultiply = (a) => (b) => a * b;

const curriedMultiplyBy7 = curriedMultiply(5);


curriedMultiplyBy7(5)
