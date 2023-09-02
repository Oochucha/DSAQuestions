/**
 * The function `subsets` generates all possible subsets of an array of numbers using recursion.
 * @param nums - The `nums` parameter is an array of numbers.
 * @returns The function `subsets` returns an array of all possible subsets of the input `nums` array.
 */
const subsets = function (nums) {
    let result = [[]]

    /**
     * The above function uses recursion to generate all possible combinations of elements in an array.
     * @param idx - The parameter `idx` represents the starting index for the loop. It is used to keep
     * track of the current position in the `nums` array.
     * @param currArr - The `currArr` parameter is an array that is used to store the current
     * combination of elements. It is passed as an argument to the `recursion` function and is updated
     * with elements from the `nums` array during each recursive call.
     */
    function recursion(idx, currArr) {
        for (let i = idx; i < nums.length; i++) {
            currArr.push(nums[i]);
            result.push([...currArr])
            recursion(i + 1, currArr)
            currArr.pop();
        }
    }
    recursion(0, [])
    return result
}

const nums1 = [1, 2, 3]
console.log(subsets(nums1));

const nums2 = [1, 2, 3, 4, 5]
console.log(subsets(nums2));