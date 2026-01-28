// 9. Two Heaps
// To solve problems that require finding the median of a stream of numbers.
// Requires a MinHeap and MaxHeap implementation.
// Time Complexity: O(logN) for insertion, O(1) for finding the median.
// Space Complexity: O(N) to store all the numbers.
// Note: JavaScript doesn't have built-in heaps. A library or custom implementation is needed.
// This example outlines the logic without a concrete heap implementation.

class MedianOfAStream {
  constructor() {
    // Max-heap to store the smaller half of the numbers
    this.maxHeap = []; // Should be a MaxHeap
    // Min-heap to store the larger half of the numbers
    this.minHeap = []; // Should be a MinHeap
  }

  insertNum(num) {
    // Add to max-heap first
    if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
      // this.maxHeap.add(num);
    } else {
      // this.minHeap.add(num);
    }

    // Balance the heaps
    // maxHeap can have at most one more element than minHeap
    if (this.maxHeap.length > this.minHeap.length + 1) {
      // this.minHeap.add(this.maxHeap.poll());
    } else if (this.maxHeap.length < this.minHeap.length) {
      // this.maxHeap.add(this.minHeap.poll());
    }
  }

  findMedian() {
    // If we have an even number of elements, median is the average of the two middle elements
    if (this.maxHeap.length === this.minHeap.length) {
      // return (this.maxHeap[0] + this.minHeap[0]) / 2.0;
    }
    // If odd, the median is the root of the max-heap
    // return this.maxHeap[0];
  }
}

// --- Example ---
/*
const medianOfAStream = new MedianOfAStream();
medianOfAStream.insertNum(3);
medianOfAStream.insertNum(1);
console.log(`The median is: ${medianOfAStream.findMedian()}`); // Output: 2
medianOfAStream.insertNum(5);
console.log(`The median is: ${medianOfAStream.findMedian()}`); // Output: 3
medianOfAStream.insertNum(4);
console.log(`The median is: ${medianOfAStream.findMedian()}`); // Output: 3.5
*/
