class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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
console.log(largestValuesInEachRow1);
