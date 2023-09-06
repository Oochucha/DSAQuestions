/**
 * The function calculates the maximum depth of a binary tree.
 * @param root - The "root" parameter represents the root node of a binary tree.
 * @returns The maximum depth of the binary tree rooted at `root`.
 */
const maxDepth = function (root) {
  /* The line `if (!root) return 0;` is checking if the `root` parameter is null or undefined. If it
  is, it means that there are no nodes in the binary tree, so the function returns 0 as the maximum
  depth. */
  if (!root) return 0;

  /* The code is recursively calculating the maximum depth of the binary tree. */
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

let tree = {
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

console.log(maxDepth(tree));
