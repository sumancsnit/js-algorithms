// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 01

const pyramid = (n) => {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
};

pyramid(2);

// Solution 02
// recursive solution

const pyramid2 = (n, row = 0, level = '') => {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid2(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid2(n, row, level + add);
};

pyramid2(3);

function starPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
    }
}

// Example usage
starPyramid(5);
/* Output:
    *
   ***
  *****
 *******
*********
*/
