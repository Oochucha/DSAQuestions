/**
 * The function `findKthPositive` takes an array `arr` and a number `k` as input, and returns the kth
 * positive integer that is missing from the array.
 * @param arr - An array of positive integers in ascending order.
 * @param k - The parameter `k` represents the position of the missing positive integer we want to find
 * in the array `arr`.
 * @returns the kth positive integer that is missing from the given array.
 */
const findKthPositive = function (arr, k) {
  let missingCount = 0;
  let currentNumber = 1;

  while (missingCount < k) {
    if (!arr.includes(currentNumber)) {
      missingCount++;
    }
    if (missingCount < k) {
      currentNumber++;
    }
  }

  return currentNumber;
};

const arr = [2, 3, 4, 7, 11];
const k = 5;

const result = findKthPositive(arr, k);
console.log(result); // Output: 9
