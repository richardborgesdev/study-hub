// 11. Top 'K' Elements
// For problems that ask for the top 'K' largest or smallest elements.
// Time Complexity: O(N * logK), where N is the total number of elements.
// We iterate through all numbers and may push to the heap.
// Space Complexity: O(K) to store 'K' elements in the heap.
// Note: This pattern typically uses a Min-Heap. A library or custom implementation is needed.
// The example below outlines the logic.

function findTopKElements(numbers, k) {
  // const minHeap = new MinHeap();
  // // Initialize the heap with the first K elements
  // for (let i = 0; i < k; i++) {
  //     minHeap.add(numbers[i]);
  // }
  // // Iterate through the rest of the numbers
  // for (let i = k; i < numbers.length; i++) {
  //     // If the current number is larger than the smallest element in the heap (the root)
  //     if (numbers[i] > minHeap.peek()) {
  //         // Remove the smallest element and add the current one
  //         minHeap.poll();
  //         minHeap.add(numbers[i]);
  //     }
  // }
  // // The heap now contains the top 'K' elements
  // return minHeap.toArray();
}

// --- Example ---
/*
const arr5 = [3, 1, 5, 12, 2, 11];
const k2 = 3;
console.log(`Top ${k2} elements: ` + findTopKElements(arr5, k2)); // Output: [5, 12, 11]
*/
