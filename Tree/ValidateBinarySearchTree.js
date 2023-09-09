/**
 * The function `isValidBST` checks if a binary search tree is valid by performing an inorder traversal
 * and comparing each node's value with the previous node's value.
 * @param root - The `root` parameter represents the root node of a binary search tree.
 * @returns The function `isValidBST` is returning the result of the `inorderTraversal` function.
 */
function isValidBST(root) {
  let prev = null;

  /**
   * The function performs an inorder traversal of a binary tree and checks if the values are in
   * ascending order.
   * @param node - The parameter `node` represents a node in a binary tree.
   * @returns a boolean value.
   */
  function inorderTraversal(node) {
    if (node === null) {
      return true;
    }

    if (!inorderTraversal(node.left)) {
      return false;
    }

    if (prev !== null && node.val <= prev.val) {
      return false;
    }

    prev = node;

    return inorderTraversal(node.right);
  }

  return inorderTraversal(root);
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

const isValid1 = isValidBST(tree1);

console.log(isValid1);

const isValid2 = isValidBST(tree2);

console.log(isValid2);
