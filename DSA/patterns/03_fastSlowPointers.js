// 3. Fast & Slow Pointers (Floyd's Tortoise and Hare)
// Used in problems involving linked lists to detect cycles.
// Time Complexity: O(N), where N is the number of nodes in the linked list.
// The fast pointer will catch up to the slow pointer if there is a cycle.
// Space Complexity: O(1), as we only use two pointers.
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let slowPointer = head;
  let fastPointer = head;

  // The fast pointer moves twice as fast as the slow pointer
  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    // If the pointers meet, a cycle is detected
    if (slowPointer === fastPointer) {
      return true;
    }
  }

  // If the loop finishes, no cycle was found
  return false;
}

// --- Example ---
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = head.next.next; // Creates a cycle

console.log(`LinkedList has cycle: ` + hasCycle(head)); // Output: true
