/**
 * Perform a binary search on a sorted array to find the range of indices where a specific target value occurs.
 * @param {number[]} nums - The sorted array to search in.
 * @param {number} target - The target value to search for.
 * @returns {number[]} - An array containing the leftmost and rightmost indices where the target value is found.
 */
const searchRange = function(nums, target) {
    const binarySearch = (nums, target, isSearchingLeft) => {
        let left = 0;
        let right = nums.length - 1;
        let idx = -1;
      
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                idx = mid;
                if (isSearchingLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
      
        return idx;
    };
    
    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);
    
    return [left, right];    
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
const result = searchRange(nums, target);

console.log(result);