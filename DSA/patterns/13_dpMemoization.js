// 13. Dynamic Programming - Memoization (Top-Down)
// Solves problems by breaking them down into subproblems and caching the results.
// Time Complexity: O(N), as each subproblem is solved only once.
// Space Complexity: O(N) for the cache and recursion stack.
function fibonacciWithMemoization(n, memo = {}) {
  // If the result for 'n' is already in our cache, return it
  if (n in memo) {
    return memo[n];
  }

  // Base cases for the Fibonacci sequence
  if (n <= 1) {
    return n;
  }

  // Recursive step: compute the result, cache it, and then return it
  memo[n] =
    fibonacciWithMemoization(n - 1, memo) +
    fibonacciWithMemoization(n - 2, memo);

  return memo[n];
}

// --- Example ---
const n = 10;
console.log(
  `Fibonacci of ${n}: ` + fibonacciWithMemoization(n)
); // Output: 55
