class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * The function `largestValues` takes a binary tree as input and returns an array containing the
 * largest value in each row of the tree.
 * @param root - The `root` parameter represents the root node of a binary tree.
 * @returns The function `largestValues` returns an array of the largest values in each row of a binary
 * tree.
 */
function largestValues(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const rowSize = queue.length;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < rowSize; i++) {
      const node = queue.shift();
      max = Math.max(max, node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(max);
  }

  return result;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(5);
root1.left.right = new TreeNode(3);
root1.right.right = new TreeNode(9);

const largestValuesInEachRow1 = largestValues(root1);
console.log(
  "🚀 ~ file: find-largest-value-in-each-tree-row.js:47 ~ largestValuesInEachRow1:",
  largestValuesInEachRow1
);
