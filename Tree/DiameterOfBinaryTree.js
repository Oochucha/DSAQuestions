/* The code defines a function called `diaimeterOfBinaryTree` that takes a `root` parameter, which
represents the root node of a binary tree. */
var diaimeterOfBinaryTree = function (root) {
    let maxD = 0;

    /**
     * The function performs a depth-first search on a binary tree and calculates the maximum diameter
     * of the tree.
     * @param node - The parameter "node" represents a node in a binary tree.
     * @returns the maximum depth of the binary tree.
     */
    function dfs(node) {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        let currMax = left + right;
        maxD = Math.max(maxD, currMax);

        return Math.max(left + 1, right + 1);
    }

    dfs(root);
    return maxD;
};

/* The code is creating a binary tree with 7 nodes. Each node has a `val` property that represents the
value of the node, and `left` and `right` properties that represent the left and right child nodes,
respectively. The tree structure is as follows: */
let root = {
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

console.log(diaimeterOfBinaryTree(root));
