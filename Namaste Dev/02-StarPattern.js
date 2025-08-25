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

/**
 * Prints a left-aligned triangle pattern where each row contains its row number repeated.
 * Example for rows = 7:
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 * 6 6 6 6 6 6
 * 7 7 7 7 7 7 7
 */
const printLeftTriangle2 = (rows) => {
  for (let i = 0; i < rows; i++) {
    let star = '';
    for (let j = 0; j <= i; j++) {
      star += `${i + 1} `;
    }
    console.log(star);
  }
};

// Output for printLeftTriangle2(7):
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
// 7 7 7 7 7 7 7

/**
 * Prints a left-aligned triangle pattern where each row contains decreasing numbers starting from 1.
 * Example for n = 5:
 * 12345
 * 1234
 * 123
 * 12
 * 1
 */
const printDecreasingNumberTriangle = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
};

// Output for printDecreasingNumberTriangle(5):
// 12345
// 1234
// 123
// 12
