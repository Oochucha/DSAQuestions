/**
 * Given an array of distinct integers nums and a target integer target, return the number of possible combinations
 * that add up to target.
 */

/**
 * The function `combinationSum` calculates the number of combinations of numbers from the `nums` array
 * that sum up to the `target` value.
 * @param nums - The `nums` parameter is an array of positive integers.
 * @param target - The "target" parameter in the "combinationSum" function represents the desired sum
 * that we want to achieve using the numbers in the "nums" array.
 * @returns the number of combinations that can be formed using the numbers in the `nums` array to sum
 * up to the `target` value.
 */
function combinationSum(nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
}

// Example usage:
const nums = [1, 2, 3];
const target = 4;
console.log(combinationSum(nums, target)); // Output: 7
