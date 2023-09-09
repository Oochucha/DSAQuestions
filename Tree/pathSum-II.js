function findPaths(root, targetSum) {
  const result = [];
  const path = [];

  function dfs(node, currentSum) {
    if (!node) {
      return;
    }

    path.push(node.val);
    currentSum += node.val;

    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...path]);
    } else {
      dfs(node.left, currentSum);
      dfs(node.right, currentSum);
    }

    path.pop();
  }

  dfs(root, 0);

  return result;
}

let tree1 = {
  val: 4,
  left: {
    val: 8,
    left: {
      val: 1,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 5,
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
let sum2 = 8;

const isSum1 = findPaths(tree1, sum1);
const isSum2 = findPaths(tree2, sum2);

console.log(isSum1);
console.log(isSum2);
