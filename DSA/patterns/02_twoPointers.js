// 2. Two Pointers
// Used for searching pairs in a sorted array.
// Time Complexity: O(N), where N is the number of elements in the array.
// We traverse the array at most once.
// Space Complexity: O(1), as we only use a constant amount of extra space.
function findPairWithTargetSum(sortedNumbers, targetSum) {
  let leftPointer = 0;
  let rightPointer = sortedNumbers.length - 1;

  // Continue searching as long as the two pointers don't cross
  while (leftPointer < rightPointer) {
    const currentSum = sortedNumbers[leftPointer] + sortedNumbers[rightPointer];

    // If the sum equals the target, we found our pair
    if (currentSum === targetSum) {
      return [leftPointer, rightPointer];
    }
    // If the sum is less than the target, we need a larger sum
    // So, move the left pointer to the right
    else if (currentSum < targetSum) {
      leftPointer++;
    }
    // If the sum is greater than the target, we need a smaller sum
    // So, move the right pointer to the left
    else {
      rightPointer--;
    }
  }

  // Return [-1, -1] if no pair is found
  return [-1, -1];
}

// --- Example ---
const arr2 = [1, 2, 3, 4, 6];
const target = 6;
console.log(
  `Pair with target sum ${target}: ` + findPairWithTargetSum(arr2, target)
); // Output: [1, 3]
