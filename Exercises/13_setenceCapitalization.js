// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
  const words = [];

  for (let e of str.split(' ')) {
    words.push(e[0].toUpperCase() + e.slice(1));
  }

  return words.join(' ');
};

console.log(capitalize('paap ko jalakar rakh kar dunga'));

// sol 2

const capitalize2 = (str) => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(capitalize2('mard ko drad nahi hota hai'));
