/**
 * The function `searchInsertPosition` takes in an array of numbers (`nums`) and a target number
 * (`target`), and returns the index where the target should be inserted in the array.
 * @param nums - An array of numbers in ascending order.
 * @param target - The target parameter is the value that we are searching for or the value that we
 * want to insert into the given array.
 * @returns The function `searchInsertPosition` returns the index at which the `target` element should
 * be inserted into the `nums` array, or the index of the `target` element if it already exists in the
 * array.
 */
function searchInsertPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
      ans = mid;
    }
  }

  return ans === -1 ? nums.length - 1 : ans;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 4;

const result = searchInsertPosition(nums, target);
console.log("🚀 ~ file: seacrchInsertPosition.js:26 ~ result:", result);
