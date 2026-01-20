# Coding Interview Preparation Guide

## 1. Understanding the Problem
- Read the problem statement carefully.
- Restate the problem in your own words.
- Ask questions and clarify any doubts.

## 2. Structuring Your Reasoning
- Break the problem into smaller parts.
- Explain your reasoning out loud.

## 3. Choosing Data Structures
- List possible structures (lists, stacks, queues, sets, hashmaps, trees, graphs).
- Justify your choice of structure.

## 4. Algorithms and Initial Solution
- Start with a simple (brute-force) solution.
- Write the initial code.
- Test with basic inputs.

## 5. Optimization
- Identify performance bottlenecks.
- Propose improvements (e.g., use of hashmaps, sorting algorithms, binary search, recursion, DP).
- Analyze complexity (time and space).

## 6. Testing and Edge Cases
- Test with different inputs, including edge cases (empty lists, all elements the same, etc).
- Write simple tests and explain the expected results.

## 7. Communication
- Explain each step and decision.
- Ask for time to think if needed.
- Be clear and objective.

---

# JavaScript Basics for Coding Interviews

## 1. Declaring Variables and Functions
```js
// Variable declaration
let count = 0;
const name = 'Alice';

// Function declaration
function add(a, b) {
	return a + b;
}
```

## 2. Iterating (for, while, forEach)
```js
const arr = [1, 2, 3];

// for loop
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// while loop
let i = 0;
while (i < arr.length) {
	console.log(arr[i]);
	i++;
}

// forEach
arr.forEach(item => console.log(item));
```

## 3. Manipulating Arrays, Strings, Maps
```js
// Arrays
const nums = [1, 2, 3];
nums.push(4); // [1,2,3,4]
nums.pop();   // [1,2,3]

// Strings
const str = 'hello';
const upper = str.toUpperCase(); // 'HELLO'
const chars = str.split('');     // ['h','e','l','l','o']

// Maps (dictionaries)
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // 1
```

## 4. Simple Tests and Edge Cases
```js
function isEmpty(arr) {
	return arr.length === 0;
}

// Test cases
console.log(isEmpty([]));        // true (empty array)
console.log(isEmpty([1, 2, 3])); // false

// Edge case: all elements are the same
function allEqual(arr) {
	return arr.every(x => x === arr[0]);
}
console.log(allEqual([2, 2, 2])); // true
console.log(allEqual([1, 2, 3])); // false

// Find the maximum number in an array, handling edge cases
function findMax(arr) {
  if (arr.length === 0) return null; // Handle empty array
  return Math.max(...arr);
}

console.log(findMax([])); // null (empty array)
console.log(findMax([5, 5, 5])); // 5 (all numbers are the same)
console.log(findMax([1, 2, 3])); // 3 (normal case)
```

---

# Key Data Structures in JavaScript

Understanding and using these data structures is essential for coding interviews:

## 1. Lists (Arrays)
```js
const list = [1, 2, 3];
list.push(4); // [1,2,3,4]
list.pop();   // [1,2,3]
```
**Use:** Store ordered collections, access by index.

## 2. Stacks
```js
const stack = [];
stack.push(1);
stack.push(2);
stack.pop(); // 2
```
**Use:** LIFO (Last-In, First-Out) operations, e.g., undo, parsing.

## 3. Queues
```js
const queue = [];
queue.push(1);
queue.push(2);
queue.shift(); // 1
```
**Use:** FIFO (First-In, First-Out) operations, e.g., task scheduling.

## 4. Sets
```js
const set = new Set([1, 2, 2, 3]);
set.add(4);
console.log(set.has(2)); // true
```
**Use:** Store unique values, fast lookup.

## 5. Hashmaps (Objects/Map)
```js
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // 1

const obj = { a: 1, b: 2 };
console.log(obj['a']); // 1
```
**Use:** Key-value pairs, fast access by key.

## 6. Linked Lists (Conceptual Example)
```js
// Node definition
class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
// Usage
const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;
```
**Use:** Efficient insertions/deletions, dynamic memory.

## 7. Trees (e.g., Binary Search Tree)
```js
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
// Usage
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
```
**Use:** Hierarchical data, fast search (BST), heaps, AVL.

## 8. Graphs (Adjacency List)
```js
const graph = {
	A: ['B', 'C'],
	B: ['A', 'D'],
	C: ['A', 'D'],
	D: ['B', 'C']
};
```
**Use:** Model networks, relationships, traversals (BFS, DFS).

---

# Key Algorithms and Complexity

## Sorting Algorithms

### Bubble Sort (O(n²))

```js
function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}
```
**Use:** Simple, educational; not efficient for large arrays.

### Insertion Sort (O(n²))
```js
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
	return arr;
}
```
**Use:** Good for small or nearly sorted arrays.

### Merge Sort (O(n log n))
```js
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
function merge(left, right) {
	const result = [];
	let i = 0, j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) result.push(left[i++]);
		else result.push(right[j++]);
	}
	return result.concat(left.slice(i)).concat(right.slice(j));
}
```
**Use:** Efficient and stable; good for large arrays.

### Quick Sort (O(n log n) average)
```js
function quickSort(arr) {
	if (arr.length <= 1) return arr;
	const pivot = arr[0];
	const left = arr.slice(1).filter(x => x < pivot);
	const right = arr.slice(1).filter(x => x >= pivot);
	return quickSort(left).concat(pivot, quickSort(right));
}
```
**Use:** Fast in practice, but worst-case O(n²).

## Binary Search (O(log n))
```js
function binarySearch(arr, target) {
	let left = 0, right = arr.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) return mid;
		if (arr[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
}
```
**Use:** Search in sorted arrays.

## Recursion & Backtracking
```js
// Factorial (recursion)
function factorial(n) {
	if (n === 0) return 1;
	return n * factorial(n - 1);
}

// Backtracking: Subsets
function subsets(nums) {
	const result = [];
	function backtrack(path, start) {
		result.push([...path]);
		for (let i = start; i < nums.length; i++) {
			path.push(nums[i]);
			backtrack(path, i + 1);
			path.pop();
		}
	}
	backtrack([], 0);
	return result;
}
```
**Use:** Recursion for divide-and-conquer; backtracking for exploring all possibilities.

## Dynamic Programming (DP)
```js
// Fibonacci with memoization
function fib(n, memo = {}) {
	if (n <= 1) return n;
	if (memo[n]) return memo[n];
	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
}
```
**Use:** Problems with overlapping subproblems and optimal substructure.

## Complexity & Big-O Analysis

### Understanding Big-O Notation

- **O(1)**: Constant time (e.g., array access by index)
- **O(n)**: Linear time (e.g., single loop)
- **O(n²)**: Quadratic time (e.g., nested loops)
- **O(n³)**: Cubic time (e.g., triple nested loops)
- **O(log n)**: Logarithmic time (e.g., binary search)
- **O(n log n)**: Linearithmic (e.g., merge sort, quick sort)
- **O(2ⁿ)**: Exponential time (e.g., brute-force recursion)
- **O(n!)**: Factorial time (e.g., all permutations)

### Evaluating and Comparing Solutions

**Key Principle:** Always analyze both **time** and **space** complexity, then choose the most efficient approach.

#### Example: Find if two numbers in an array sum to a target

**Approach 1: Brute Force (O(n²))**
```js
function twoSumBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

// Time: O(n²), Space: O(1)
// Problem: Slow for large arrays due to nested loops
```

**Approach 2: Hash Map Optimization (O(n))**
```js
function twoSumOptimized(arr, target) {
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(arr[i], i);
  }
  return null;
}

// Time: O(n), Space: O(n)
// Advantage: Much faster! Single pass through array, using a Hash Map for lookup
```

**Comparison:**
- **Brute Force**: O(n²) time, O(1) space
- **Hash Map**: O(n) time, O(n) space

📌 **Example:** "This brute-force solution runs in O(n²), but we can use a Hash Map and reduce it to O(n). The trade-off is using O(n) extra space, which is worth it for large arrays."

### When to Choose Each Approach

| Scenario | Best Approach | Reason |
|----------|--------------|--------|
| Small arrays (< 100 elements) | Either approach | Difference is negligible |
| Large arrays, unlimited memory | Hash Map (O(n)) | Speed is priority |
| Large arrays, limited memory | Consider space constraints | Balance time vs space |
| Real-time systems | Optimize for time first | Speed is critical |

**Always be prepared to:**
1. Explain the time and space complexity of your solution
2. Compare it with alternative approaches
3. Justify your choice based on the problem constraints
4. Discuss trade-offs between time and space efficiency
