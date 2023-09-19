/**
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise,
 * return the number of negative numbers in grid.
 */

/* The code defines a function called `countNegatives` that takes in a 2D matrix called `grid` as its
parameter. The function counts the number of negative numbers in the matrix. */
var countNegatives = function (grid) {
  let [x, y] = [grid.length, grid[0].length];
  let output = 0;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (grid[i][j] < 0) {
        output += (y - j) * (grid.length - i);
        y = j;
        break;
      }
    }
  }
  return output;
};

const grid1 = [
  [-4, -3, -1, 1],
  [-2, -2, 1, 2],
  [-1, 1, 2, 3],
  [1, 2, 4, 5],
];

const result1 = countNegatives(grid1);
console.log(
  "🚀 ~ file: coountNegativeNumberInMetrix.js:34 ~ result1:",
  result1
);

const grid2 = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

const result2 = countNegatives(grid2);
console.log(
  "🚀 ~ file: coountNegativeNumberInMetrix.js:42 ~ result2:",
  result2
);
