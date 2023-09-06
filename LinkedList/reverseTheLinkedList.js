/* The ListNode class represents a node in a linked list, with a value and a reference to the next
node. */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * The function `reverseLinkedList` takes the head of a linked list as input and returns the reversed
 * linked list.
 * @param head - The `head` parameter is the head node of a linked list.
 * @returns the head of the reversed linked list.
 */
function reverseLinkedList(head) {
  let previous = null;
  let current = head;

  /* The code block inside the `while` loop is responsible for reversing the linked list. */
  while (current) {
    let nextTemp = current.next;
    current.next = previous;
    previous = current;
    current = nextTemp;
  }

  return previous;
}

/* The code is creating a linked list with six nodes. Each node has a value and a reference to the next
node in the list. The nodes are connected in the following order: node1 -> node2 -> node3 -> node4
-> node5 -> node6. This creates a linked list with values 1, 2, 3, 4, 5, and 6. */
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

const reversedHead = reverseLinkedList(node1);

/* The code is traversing the reversed linked list starting from the reversed head node
(`reversedHead`). */
let currentNode = reversedHead;
while (currentNode) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}
