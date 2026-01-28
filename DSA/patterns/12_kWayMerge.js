// 12. K-way Merge
// For problems involving merging 'K' sorted lists.
// Time Complexity: O(N * logK), where N is the total number of elements and K is the number of lists.
// Every extraction and insertion into the heap costs logK.
// Space Complexity: O(K) for the heap to store one element from each list.
// Note: Uses a Min-Heap to efficiently get the smallest element across all lists.
// This example outlines the logic.

function mergeKSortedLists(lists) {
  // const minHeap = new MinHeap(); // Store {value, listIndex, elementIndex}
  // // Push the first element of each list into the heap
  // for (let i = 0; i < lists.length; i++) {
  //     if (lists[i].length > 0) {
  //         minHeap.add({ value: lists[i][0], listIndex: i, elementIndex: 0 });
  //     }
  // }
  // const result = [];
  // while (minHeap.size() > 0) {
  //     const { value, listIndex, elementIndex } = minHeap.poll();
  //     result.push(value);
  //     // If there's a next element in the same list, add it to the heap
  //     if (elementIndex + 1 < lists[listIndex].length) {
  //         minHeap.add({
  //             value: lists[listIndex][elementIndex + 1],
  //             listIndex: listIndex,
  //             elementIndex: elementIndex + 1
  //         });
  //     }
  // }
  // return result;
}

// --- Example ---
/*
const l1 = [2, 6, 8];
const l2 = [3, 6, 7];
const l3 = [1, 3, 4];
console.log("Merged list: " + mergeKSortedLists([l1, l2, l3])); // Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]
*/
