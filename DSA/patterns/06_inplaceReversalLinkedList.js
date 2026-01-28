// 6. In-place Reversal of a LinkedList
// For reversing a linked list without using extra space.
// Time Complexity: O(N), where N is the number of nodes in the list.
// Space Complexity: O(1), as we only use a few pointers.
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let previousNode = null;
  let currentNode = head;

  // Traverse the list, reversing pointers as we go
  while (currentNode !== null) {
    const nextNode = currentNode.next; // Store the next node
    currentNode.next = previousNode; // Reverse the current node's pointer
    previousNode = currentNode; // Move previousNode one step forward
    currentNode = nextNode; // Move currentNode one step forward
  }

  // The new head of the reversed list is the last node we processed
  return previousNode;
}

// --- Example ---
const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);

let reversedHead = reverseLinkedList(head2);
let reversedList = "";
while (reversedHead !== null) {
  reversedList += reversedHead.value + " ";
  reversedHead = reversedHead.next;
}
console.log("Reversed LinkedList: " + reversedList); // Output: Reversed LinkedList: 4 3 2 1
