const cache = {};
const memoizedAddTen = (n) => {
  if (n in cache) {
    return cache[n];
  }
  cache[n] = n + 10;
  return cache[n];
};

memoizedAddTen(10);
