const reverseArray = (str) => {
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    const temp = str[i];
    str[i] = str[length - 1 - i];
    str[length - 1 - i] = temp;
  }
  return str;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ['o', 'l', 'l', 'e', 'h']
