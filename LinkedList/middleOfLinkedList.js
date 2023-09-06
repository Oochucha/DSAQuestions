/* The ListNode class represents a node in a linked list, with a value and a reference to the next
node. */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * The function finds the middle node of a linked list using the slow and fast pointer technique.
 * @param head - The `head` parameter represents the head node of a linked list.
 * @returns The middle node of the linked list.
 */
const findMiddleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

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

const middleNode = findMiddleNode(node1);
console.log(middleNode.val); // This will print 3
