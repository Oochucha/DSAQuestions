/**
 * The function checks if two binary trees are the same by comparing their values and recursively
 * checking their left and right subtrees.
 * @param root1 - The first parameter `root1` is the root node of the first binary tree.
 * @param root2 - The parameter `root2` is the root node of the second binary tree.
 * @returns either 'is same' if both trees are the same, or 'is not same' if they are not the same.
 */
const SameTree = function (root1, root2) {
    /* The code is implementing a recursive function called `SameTree` that checks if two binary trees
    are the same. */
    if (!root1 && !root2) return 'is same';
    if (!root1 || !root2) return 'is not same';

    if (root1.val !== root2.val) return 'is not same';

    return SameTree(root1.left, root2.left) && SameTree(root1.right, root2.right);
}

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

let tree3 = {
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
        val: 5,
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



console.log(SameTree(tree1, tree2));
console.log(SameTree(tree1, tree3));