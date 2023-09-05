/** Given the root of a binary tree, return the level order traversal of its nodes' values.
 *  (i.e., from left to right, level by level).
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * The levelTraversal function performs a breadth-first search on a binary tree and returns the values
 * of each level in an array of arrays.
 * @param root - The `root` parameter represents the root node of a binary tree.
 * @returns The function `levelTraversal` is returning an array of arrays. Each inner array represents
 * a level in the binary tree, and contains the values of the nodes at that level.
 */
const levelTraversal = (root) => {
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const cuurentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      cuurentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(cuurentLevel);
  }
  return result;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(levelTraversal(root));
