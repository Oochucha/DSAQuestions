/**
 * The binarySearch function performs a binary search on a sorted array to find the index of a target
 * element, returning -1 if the target is not found.
 * @param nums - An array of numbers in ascending order.
 * @param target - The "target" parameter in the binarySearch function is the value that we are
 * searching for in the given array "nums".
 * @returns the index of the target element if it is found in the nums array. If the target element is
 * not found, the function returns -1.
 */
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  /* The code block inside the `while` loop is performing a binary search algorithm. Here's how it
  works: */
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

const result = binarySearch(nums, target);
console.log("🚀 ~ file: binarySearch.js:24 ~ result:", result);
