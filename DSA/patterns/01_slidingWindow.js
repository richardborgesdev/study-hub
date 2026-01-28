// 1. Sliding Window
// Used for finding subarrays or substrings that satisfy certain conditions.
// Time Complexity: O(N), where N is the number of elements in the input array.
// We iterate through the array once.
// Space Complexity: O(1), as we use a constant amount of extra space.
function findMaxSumSubarrayOfSize(numbers, size) {
  let currentRunningSum = 0;
  let maxSum = -Infinity;
  let windowStart = 0;

  // Iterate through the array to slide the window
  for (let windowEnd = 0; windowEnd < numbers.length; windowEnd++) {
    // Add the next element to the window's sum
    currentRunningSum += numbers[windowEnd];

    // When the window size is met, we can process it
    if (windowEnd >= size - 1) {
      // Update the maximum sum found so far
      maxSum = Math.max(maxSum, currentRunningSum);

      // Subtract the element that is leaving the window
      currentRunningSum -= numbers[windowStart];

      // Slide the window forward by one position
      windowStart++;
    }
  }

  return maxSum;
}

// --- Example ---
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(
  `Maximum sum of a subarray of size ${k}: ` + findMaxSumSubarrayOfSize(arr, k)
); // Output: 9
