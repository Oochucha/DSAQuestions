/**
 * The `symmetricTree` function checks if a binary tree is symmetric by recursively comparing the left
 * and right subtrees.
 * @param root - The `root` parameter represents the root node of a binary tree.
 * @returns The function `symmetricTree` returns either "is symmetric" or "is not symmetric" depending
 * on whether the given binary tree is symmetric or not.
 */
const symmetricTree = function (root) {
  if (!root) return "is symmetric";

  /**
   * The function checks if two binary trees are mirror images of each other.
   * @param left - The "left" parameter represents the left subtree of a binary tree.
   * @param right - The "right" parameter represents the right subtree of a binary tree node.
   * @returns either "is symmetric" or "is not symmetric" based on whether the given binary trees are
   * symmetric or not.
   */
  function isMirror(left, right) {
    if (!left && !right) return "is symmetric";

    if (!left || !right || left.val !== right.val) return "is not symmetric";

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return isMirror(root.left, root.right);
};

let tree1 = {
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
    val: 3,
    left: {
      val: 6,
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

console.log(symmetricTree(tree1));
console.log(symmetricTree(tree2));
