/**
 * Function to perform binary search on a rotated sorted array.
 * 
 * @param {number[]} nums - The rotated sorted array to search in.
 * @param {number} target - The target element to search for.
 * @returns {number} - The index of the target element if found, otherwise -1.
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && nums[mid] >= target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[end] >= target && nums[mid] <= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

const nums = [3, 4, 5, 1, 2];
const target = 3;
const result = search(nums, target);

console.log(result)