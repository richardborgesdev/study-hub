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

---

# System Design

## Overview

In system design interviews, you'll discuss architecture, scalable solutions, reliability, and decision-making in complex scenarios. The goal is to demonstrate how you think, structure, and evolve a solution.

**Key Point:** There's rarely one "right" answer. What matters is clarity, well-justified choices, and the ability to discuss trade-offs in depth.

### Learning Resources
- System Design Primer (GitHub)
- NeetCode – System Design
- High Scalability blog
- Book: System Design Interview – Alex Xu
- Course: InterviewReady – System Design

---

## Approach: Steps to Guide Your Response

### 1. Understand the Problem
- Align scope, users, and objectives with the interviewer
- Ask clarifying questions about scale, consistency requirements, and constraints
- Define functional and non-functional requirements

### 2. Start High-Level
- Think about the user journey: request → response
- Sketch the main components and their interactions
- Don't dive into details too early

### 3. Identify Core Components
- **Frontend**: Web, mobile, desktop
- **API Gateway**: Routing, authentication, rate limiting
- **Backend Services**: Business logic, microservices
- **Database**: SQL, NoSQL, sharding strategy
- **Cache**: Redis, Memcached, CDN
- **Message Queue**: Asynchronous processing
- **External Services**: Third-party APIs

### 4. Detail Interactions
- Protocols: HTTP, gRPC, WebSocket
- Latency and throughput considerations
- Scalability and failure handling
- Synchronous vs. asynchronous flows

### 5. Estimate Scale
- Requests per second (RPS)
- Payload sizes
- Data volume and growth
- Storage requirements

### 6. Explore Alternatives
- Queue vs. polling
- Monolith vs. microservices
- Synchronous vs. asynchronous processing
- SQL vs. NoSQL

### 7. Handle Failures
- Retry mechanisms
- Timeouts and circuit breakers
- Fallback strategies
- Message durability and ordering

---

## Key Concepts and Techniques

### Load Balancing
```
Strategies:
- Round-robin: Distribute equally across servers
- Least connections: Route to least busy server
- IP hash: Consistent routing based on client IP
- Health checks: Remove failing servers from rotation
```

### Caching
```js
// Cache layers
1. Client-side caching (browser)
2. CDN caching (edge servers)
3. Application caching (Redis, Memcached)
4. Database caching (query cache)

// Cache considerations
- TTL (Time-To-Live): Balance freshness vs. hits
- Cache stampede: Multiple requests for expired key
- Cache warming: Pre-load frequently accessed data
- Invalidation strategy: Ensure consistency
```

### Sharding & Partitioning
```
Strategies:
1. Range-based: User ID 1-1000 → Shard 1, 1001-2000 → Shard 2
2. Hash-based: hash(user_id) % num_shards
3. Geographic: Users in US → Region 1, Europe → Region 2
4. Directory-based: Lookup table for shard location

Considerations:
- Hot shards (uneven load distribution)
- Resharding (adding/removing shards)
- Cross-shard queries (complexity & latency)
```

### Message Queues
```
Use cases:
- Kafka: High-throughput, event streaming
- RabbitMQ: Reliable message delivery
- SQS: AWS managed queue service
- Purpose: Decouple services, handle bursts, async processing

Questions to ask:
- Order guarantee needed?
- Exactly-once delivery?
- Retention policy?
- Failure handling (DLQ)?
```

### CAP Theorem
```
Choose 2 out of 3:
- Consistency: All nodes see same data
- Availability: System always responds
- Partition tolerance: System works despite network splits

Real-world: Most systems choose AP or CP
- AP: Cache systems, social media (eventual consistency)
- CP: Banking, financial systems (strong consistency)
```

### Scalability: Vertical vs. Horizontal
```
Vertical scaling (bigger machine):
- Pros: Simple, no code changes
- Cons: Limited by hardware, expensive, single point of failure

Horizontal scaling (more machines):
- Pros: Unlimited scale, distributed, redundancy
- Cons: Complexity, distributed systems problems
```

### Resilience Patterns
```js
// Retry with exponential backoff
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Circuit breaker pattern
class CircuitBreaker {
  constructor(fn, threshold = 5, timeout = 60000) {
    this.fn = fn;
    this.failureCount = 0;
    this.threshold = threshold;
    this.timeout = timeout;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
  }

  async execute(args) {
    if (this.state === 'OPEN') {
      throw new Error('Circuit breaker is OPEN');
    }
    try {
      const result = await this.fn(...args);
      this.onSuccess();
      return result;
    } catch (err) {
      this.onFailure();
      throw err;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
      setTimeout(() => { this.state = 'HALF_OPEN'; }, this.timeout);
    }
  }
}
```

### Observability
```
Key components:
1. Metrics: RPS, latency, error rate, CPU, memory
2. Logs: Structured logging, correlation IDs
3. Traces: Distributed tracing (Jaeger, Zipkin)
4. Alerts: Notify on anomalies

Tools:
- Prometheus: Metrics collection
- ELK Stack: Logs aggregation
- Grafana: Visualization
- Datadog, New Relic: All-in-one solutions
```

---

## System Design Example: URL Shortener Service

### Requirements Analysis
**Functional:**
- Create short URL from long URL
- Redirect from short URL to long URL
- Delete short URLs
- List user's URLs

**Non-functional:**
- Scale to millions of users
- 100K reads/sec, 10K writes/sec
- Low latency redirects (<10ms)
- High availability

### High-Level Architecture
```
User → Load Balancer → API Servers → Cache (Redis) → Database (PostgreSQL)
                                    ↓
                            Message Queue (for analytics)
                                    ↓
                            Analytics Service
```

### Key Decisions

**1. Database Choice: SQL (PostgreSQL)**
- Need ACID properties
- Simple relational schema
- Data: user, short_url, long_url, created_at

**2. Caching Strategy**
- Cache in Redis: short_url → long_url
- TTL: 24 hours
- Cache-aside pattern: Check cache first, fallback to DB

**3. Short URL Generation**
```js
// Base62 encoding (numbers + lowercase + uppercase = 62 chars)
function generateShortId(num) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  while (num > 0) {
    result = chars[num % 62] + result;
    num = Math.floor(num / 62);
  }
  return result || '0';
}

// Or use distributed ID generator (Snowflake ID)
```

**4. Scaling Considerations**
- Horizontal scaling: Multiple API servers behind load balancer
- Database replication: Primary-replica for read scaling
- Sharding: Shard by user_id if needed

**5. Failure Handling**
```
- Cache miss: Go to database
- Database unavailable: Return error or cached fallback
- API server down: Load balancer routes to healthy servers
- Message queue down: Queue in local buffer, retry later
```

### Trade-offs Discussed
- Strong consistency vs. high availability (eventual consistency for analytics)
- Cache TTL: Shorter = fresher data but more DB hits
- Sharding: Adds complexity for distributed scaling

---

## Interview Checklist

Before your system design interview:

- [ ] Understand the problem clearly
- [ ] Define scope and non-functional requirements
- [ ] Propose high-level architecture
- [ ] Identify bottlenecks and limitations
- [ ] Discuss caching strategies
- [ ] Explain database design and scaling
- [ ] Address failure scenarios
- [ ] Estimate capacity (RPS, storage)
- [ ] Discuss trade-offs in your choices
- [ ] Be ready to go deeper on any component

**💡 Pro Tip:** Practice explaining why you chose or discarded techniques in each scenario. Be ready to discuss trade-offs in depth.
