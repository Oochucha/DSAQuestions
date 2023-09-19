/**
 * The function performs a binary search on an array to find the index of the first occurrence of the
 * number 1.
 * @param arr - The parameter `arr` is an array of numbers.
 * @returns the index of the first occurrence of the number 1 in the given array.
 */
const bs = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/* The code defines a function `kWeakestRows` that takes in two parameters: `mat` (a matrix) and `k`
(the number of weakest rows to return). */

var kWeakestRows = function (mat, k) {
  let count = [];
  let result = [];

  for (let i = 0; i < mat.length; i++) {
    count.push([i, bs(mat[i])]);
  }

  count.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < k; i++) {
    result.push(count[i][0]);
  }

  return result;
};

const matrix = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
const k = 3;

const result1 = kWeakestRows(matrix, k);
console.log("🚀 ~ file: kWeakestRows.js:38 ~ result:", result1);
