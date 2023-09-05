/* The TreeNode class is a JavaScript class that represents a node in a binary tree. */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * The function generates all possible binary search trees with values from 1 to n.
 * @param n - The parameter "n" represents the number of nodes in the binary search trees that will be
 * generated.
 * @returns an array of all possible unique binary search trees that can be constructed using the
 * numbers from 1 to n.
 */
function generateTrees(n) {
    if (n === 0) return [];
    return generate(1, n);
}

/**
 * The function generates all possible binary search trees given a range of values.
 * @param start - The `start` parameter represents the starting value for generating the trees. It is
 * the minimum value for the nodes in the trees.
 * @param end - The `end` parameter represents the maximum value for the range of numbers that can be
 * used to generate the trees.
 * @returns The function `generate` returns an array of binary trees.
 */
function generate(start, end) {
    const trees = [];

    if (start > end) {
        trees.push(null);
        return trees;
    }

    for (let i = start; i <= end; i++) {
        const leftTrees = generate(start, i - 1);
        const rightTrees = generate(i + 1, end);

        for (const leftTree of leftTrees) {
            for (const rightTree of rightTrees) {
                const root = new TreeNode(i);
                root.left = leftTree;
                root.right = rightTree;
                trees.push(root);
            }
        }
    }

    return trees;
}

/**
 * The function `printTree` recursively prints the values of a binary tree in a formatted string.
 * @param root - The "root" parameter is the root node of a binary tree.
 * @returns a string representation of a binary tree.
 */
function printTree(root) {
    if (root === null) return "null";
    return `(${root.val}, ${printTree(root.left)}, ${printTree(root.right)})`;
}

const n1 = 3;
const result1 = generateTrees(n1);

for (const tree of result1) {
    console.log(printTree(tree));
}

const n2 = 5;
const result2 = generateTrees(n2);

for (const tree of result2) {
    console.log(printTree(tree));
}