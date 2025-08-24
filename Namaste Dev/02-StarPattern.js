/**
 * Prints a square pattern of stars with n rows and n columns.
 * Example for n = 5:
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */
const starPattern1 = (n) => {
  const star = '* '.repeat(n);
  for (let i = 1; i <= n; i++) {
    console.log(star);
  }
};

// Output for starPattern1(5):
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
starPattern1(5);

/**
 * Prints a square pattern of stars with n rows and n columns.
 * Example for n = 5:
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */
const starPattern2 = (n) => {
  for (let i = 1; i <= n; i++) {
    let star = '';
    for (let j = 1; j <= n; j++) {
      star += '* ';
    }
    console.log(star);
  }
};

// Output for starPattern2(5):
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
starPattern2(5);

/**
 * Prints a left-aligned triangle pattern using '#' character.
 * Example for rows = 5:
 * #
 * # #
 * # # #
 * # # # #
 * # # # # #
 */
const printLeftTriangle = (rows) => {
  for (let i = 0; i < rows; i++) {
    let star = '';
    for (let j = 0; j < i + 1; j++) {
      star += '# ';
    }
    console.log(star);
  }
};

// Output for printLeftTriangle(5):
// #
// # #
// # # #
// # # # #
// # # # # #
printLeftTriangle(5);
