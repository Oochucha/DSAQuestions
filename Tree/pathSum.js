/**
 * The function checks if there is a path from the root of a binary tree to a leaf node that sums up to
 * a given target sum.
 * @param root - The root parameter represents the root node of a binary tree.
 * @param targetSum - The targetSum parameter is the sum that we are trying to find in the path from
 * the root to a leaf node in the binary tree.
 * @returns a boolean value.
 */
function hasPathSum(root, targetSum) {
  if (root === null) {
    return false;
  }

  targetSum -= root.val;

  if (root.left === null && root.right === null) {
    return targetSum === 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

let tree1 = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

let tree2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
};

let sum1 = 17;
let sum2 = 5;

const isSum1 = hasPathSum(tree1, sum1);
const isSum2 = hasPathSum(tree2, sum2);

console.log(isSum1);
console.log(isSum2);
