/* The code defines a function called `goodNode` that takes a `root` parameter, which represents the
root node of a binary tree. */
var goodNode = function (root) {
    let count = 0;

    /**
     * The function performs a depth-first search on a binary tree, counting the number of nodes whose
     * value is greater than or equal to a given maximum value.
     * @param node - The "node" parameter represents the current node being visited in a depth-first
     * search traversal of a binary tree.
     * @param max - The "max" parameter represents the maximum value encountered so far during the
     * depth-first search traversal of the binary tree.
     * @returns The function is not explicitly returning anything.
     */
    function dfs(node, max) {
        if (!node) return;

        if (node.val >= max) {
            count++;
            max = Math.max(node.val, max);
        }

        dfs(node.left, max)
        dfs(node.right, max)
    }
    dfs(root, root.val)

    return count;
}

/* The code is creating a binary tree with the following structure: */
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
        val: -2,
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

console.log(goodNode(root))