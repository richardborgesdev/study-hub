// 10. Subsets
// For problems that require generating all possible subsets (power set) of a set.
// Time Complexity: O(N * 2^N), as we generate 2^N subsets and each can take O(N) to copy.
// Space Complexity: O(N * 2^N) to store all the generated subsets.
function findAllSubsets(numbers) {
  const subsets = [[]]; // Start with an empty set

  for (const currentNumber of numbers) {
    const existingSubsetsCount = subsets.length;
    for (let i = 0; i < existingSubsetsCount; i++) {
      // Create a new subset from an existing one
      const newSubset = subsets[i].slice(0);
      // Add the current number to the new subset
      newSubset.push(currentNumber);
      // Add the new subset to our list of subsets
      subsets.push(newSubset);
    }
  }

  return subsets;
}

// --- Example ---
const arr4 = [1, 3];
console.log(
  "All subsets: ",
  findAllSubsets(arr4).map((s) => `[${s.join(",")}]`)
);
// Output: All subsets:  [ [],[1],[3],[1,3] ]
