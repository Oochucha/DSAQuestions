/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 */

/* The code defines a function called `missingNumber` that takes an array `nums` as input. */
var missingNumber = function (nums) {
  const n = nums.length;

  /* The code is calculating the expected sum and actual sum of the numbers in the array `nums` to find
  the missing number. */
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  /* The line `return expectedSum - actualSum;` is subtracting the actual sum of the numbers in the
  array from the expected sum of the numbers in the range [0, n]. This calculation will give the
  missing number in the range. */
  return expectedSum - actualSum;
};

/**
 * The function `missingNumber1` calculates the missing number in an array of consecutive numbers.
 * @param nums - The `nums` parameter is an array of numbers.
 * @returns the missing number in the given array.
 */
const missingNumber1 = function (nums) {
  let ans = 0;

  /* The code `for (let i = 0; i < nums.length; i++) { ans ^= nums[i] ^ i; }` is using the XOR operator
  (`^`) to calculate the missing number in the array `nums`. */
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i] ^ i;
  }

  /* The line `return ans ^ nums.length;` is performing an XOR operation between the current value of
  `ans` and the length of the `nums` array. */
  return ans ^ nums.length;
};

const arr1 = [3, 0, 1];
const res1 = missingNumber(arr1);
console.log("🚀 ~ file: missingNumber.js:17 ~ res1:", res1);

const arr2 = [0, 1];
const res2 = missingNumber(arr2);
console.log("🚀 ~ file: missingNumber.js:20 ~ res2:", res2);

const arr3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const res3 = missingNumber1(arr3);
console.log(
  "🚀 ~ file: missingNumber.js:23 ~ res3 - using missingNumber1:",
  res3
);
