// 14. Dynamic Programming - Tabulation (Bottom-Up)
// Solves problems by building up a solution from the base cases.
// Time Complexity: O(N), as we iterate up to 'n'.
// Space Complexity: O(N) for the table. Can be optimized to O(1) for this problem.
function fibonacciWithTabulation(n) {
  if (n <= 1) {
    return n;
  }

  // Create a table to store results from the bottom up
  const table = Array(n + 1).fill(0);
  table[1] = 1; // Base case

  // Fill the table iteratively
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

// --- Example ---
const n2 = 10;
console.log(
  `Fibonacci of ${n2}: ` + fibonacciWithTabulation(n2)
); // Output: 55
