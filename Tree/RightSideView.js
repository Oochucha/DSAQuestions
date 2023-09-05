/**
 * The function `rightSideView` takes a binary tree as input and returns an array containing the values
 * of the rightmost nodes at each level of the tree.
 * @param root - The `root` parameter represents the root node of a binary tree.
 * @returns The function `rightSideView` returns an array containing the values of the rightmost nodes
 * in each level of the binary tree.
 */
const rightSideView = function (root) {
    if (!root) return [];

    let queue = [root];
    let res = [];

    /* The code block `while (queue.length) { ... }` is a loop that iterates as long as there are nodes
    in the `queue` array. */
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let current = queue.shift();
            if (i === levelSize - 1) {
                res.push(current.val);
            }

            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
    }
    return res;
}

let tree = {
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

console.log(rightSideView(tree))