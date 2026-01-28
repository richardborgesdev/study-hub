// 5. Cyclic Sort
// For problems involving finding missing or duplicate numbers in a given range.
// Time Complexity: O(N), as each number is swapped at most once.
// Space Complexity: O(1), as the sorting is done in-place.
function cyclicSort(numbers) {
  let currentIndex = 0;

  while (currentIndex < numbers.length) {
    // The correct index for the current number is its value minus one
    const correctIndex = numbers[currentIndex] - 1;

    // If the number is not in its correct place, swap it
    console.log(`${numbers[currentIndex]} should be at index ${correctIndex}`);
    if (numbers[currentIndex] !== numbers[correctIndex]) {
      [numbers[currentIndex], numbers[correctIndex]] = [
        numbers[correctIndex],
        numbers[currentIndex],
      ]; // Swap
    } else {
      // If the number is already in its correct place, move to the next one
      currentIndex++;
    }
  }

  return numbers;
}

// --- Example ---
const arr3 = [3, 1, 5, 4, 2];
console.log("Sorted array: " + cyclicSort(arr3)); // Output: Sorted array: 1,2,3,4,5
