/**
 * You are given an array of characters letters that is sorted in non-decreasing order, and a character target.
 * There are at least two different characters in letters.
 * Return the smallest character in letters that is lexicographically greater than target.
 * If such a character does not exist, return the first character in letters.
 */

/**
 * The function `nextGreatestLetter` finds the smallest letter in the given array `letters` that is
 * greater than the `target` letter.
 * @param letters - An array of lowercase letters in sorted order.
 * @param target - The `target` parameter in the `nextGreatestLetter` function represents the letter
 * that we want to find the next greatest letter for. It is the letter that we are comparing the
 * elements in the `letters` array to.
 * @returns the next greatest letter in the given array of letters, relative to the target letter.
 */
function nextGreatestLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left < letters.length ? letters[left] : letters[0];
}

const letters = ["c", "f", "j"];
const target = "a";

/* The code is calling the `nextGreatestLetter` function with the `letters` array and `target` letter
as arguments, and assigning the result to the `result` variable. Then, it logs the value of `result`
to the console. */

const result = nextGreatestLetter(letters, target);
console.log(result);
