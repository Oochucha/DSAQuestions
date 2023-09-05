/**
 * The function `inorderTraversal` performs an inorder traversal on a binary tree and returns an array
 * of the node values in the order they were visited.
 * @param root - The `root` parameter represents the root node of a binary tree.
 * @returns The function `inorderTraversal` returns an array containing the values of the nodes in the
 * binary tree in inorder traversal order.
 */
const inorderTraversal = function (root) {
    let result = [];

    /**
     * The function recursively traverses a binary tree in in-order fashion and stores the values in an
     * array called "result".
     * @param root - The "root" parameter represents the root node of a binary tree.
     * @returns The function is not returning anything explicitly.
     */
    function traverse(root) {
        if (!root) return;

        traverse(root.left);
        result.push(root.val);
        traverse(root.right);
    }

    traverse(root);
    return result;
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

console.log(inorderTraversal(tree1));
