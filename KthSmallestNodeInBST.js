/* The code defines a function called `kthSmallest` that takes in two parameters: `root` and `k`. */
var kthSmallest = function (root, k) {
    let count = 0;
    let result;

    /**
     * The function performs an in-order traversal of a binary tree and returns the kth smallest value.
     * @param node - The parameter "node" represents a node in a binary tree.
     * @returns The function does not explicitly return anything. However, if the condition `if
     * (++count === k)` is met, the `result` variable will be assigned the value of `node.val`.
     */
    function inOrder(node) {
        if (!node) return;

        inOrder(node.left);
        if (++count === k) {
            result = node.val;
            return;
        }
        inOrder(node.right);
    }

    inOrder(root);
    return result;
};

let root = {
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

console.log(kthSmallest(root, 3));
