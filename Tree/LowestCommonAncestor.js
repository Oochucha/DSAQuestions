/**
 * The function finds the lowest common ancestor of two nodes in a binary search tree.
 * @param root - The root parameter represents the root node of a binary search tree. It is the
 * starting point from which we will search for the lowest common ancestor.
 * @param p - The parameter `p` represents one of the nodes whose lowest common ancestor we want to
 * find.
 * @param q - The parameter `q` represents one of the nodes whose lowest common ancestor we want to
 * find.
 * @returns The function `lowestCommonAncestor` returns the value of the lowest common ancestor of
 * nodes `p` and `q` in the given binary search tree.
 */
const lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;

    /* The code block is checking the values of nodes `p` and `q` with respect to the value of the
    current root node. */
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root.val
    }
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

const p1 = { val: 5, left: null, right: null }
const q1 = { val: 7, left: null, right: null }

const p2 = { val: 6, left: null, right: null }
const q2 = { val: 2, left: null, right: null }

console.log(lowestCommonAncestor(tree, p1, q1))
console.log(lowestCommonAncestor(tree, p2, q2))