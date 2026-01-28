// DSA/leetCodeUtils.js

/**
 * A cheat sheet of useful native JavaScript functions for LeetCode problems.
 */

// =================================================================
// Array Manipulation
// =================================================================

// --- .slice() ---
// Returns a shallow copy of a portion of an array into a new array object.
// It does not modify the original array.
const arrSlice = [1, 2, 3, 4, 5];
const sliced = arrSlice.slice(1, 3); // -> [2, 3]

// --- .splice() ---
// Changes the contents of an array by removing or replacing existing elements and/or adding new ones in place.
const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(2, 1, "a"); // -> arrSplice is now [1, 2, 'a', 4, 5]

// --- .map() ---
// Creates a new array populated with the results of calling a provided function on every element.
const arrMap = [1, 2, 3];
const mapped = arrMap.map((x) => x * 2); // -> [2, 4, 6]

// --- .filter() ---
// Creates a new array with all elements that pass the test implemented by the provided function.
const arrFilter = [1, 2, 3, 4, 5];
const filtered = arrFilter.filter((x) => x % 2 === 0); // -> [2, 4]

// --- .reduce() ---
// Executes a reducer function on each element of the array, resulting in a single output value.
const arrReduce = [1, 2, 3, 4];
const sum = arrReduce.reduce((acc, val) => acc + val, 0); // -> 10

// --- .forEach() ---
// Executes a provided function once for each array element.
const arrForEach = ["a", "b", "c"];
arrForEach.forEach((element) => console.log(element)); // -> 'a', 'b', 'c'

// =================================================================
// Array Sorting
// =================================================================

// --- .sort() ---
// Sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending, built upon converting the elements into strings.
const arrSortNum = [4, 2, 5, 1, 3];
arrSortNum.sort((a, b) => a - b); // For numeric sort: -> [1, 2, 3, 4, 5]

const arrSortString = ["c", "a", "b"];
arrSortString.sort(); // -> ['a', 'b', 'c']

const arrSortObjects = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];
arrSortObjects.sort((a, b) => a.age - b.age); // Sort by object property

// =================================================================
// String Manipulation
// =================================================================

// --- .substring() ---
// Returns the part of the string between the start and end indexes, or to the end of the string.
const strSub = "hello world";
const sub = strSub.substring(0, 5); // -> "hello"

// --- .split() ---
// Splits a String object into an array of strings by separating the string into substrings.
const strSplit = "a-b-c";
const parts = strSplit.split("-"); // -> ['a', 'b', 'c']

// --- .join() ---
// Joins all elements of an array into a string.
const arrJoin = ["a", "b", "c"];
const joined = arrJoin.join("-"); // -> "a-b-c"

// --- .replace() ---
// Returns a new string with some or all matches of a pattern replaced by a replacement.
const strReplace = "hello world";
const replaced = strReplace.replace("world", "JavaScript"); // -> "hello JavaScript"

// --- .charAt() ---
// Returns a new string consisting of the single UTF-16 code unit located at the specified offset.
const strCharAt = "hello";
const char = strCharAt.charAt(1); // -> "e"

// =================================================================
// Math Operations
// =================================================================

// --- Math.max() / Math.min() ---
// Returns the largest/smallest of the given numbers.
const maxNum = Math.max(1, 3, 2); // -> 3
const minNum = Math.min(1, 3, 2); // -> 1

// --- Math.abs() ---
// Returns the absolute value of a number.
const absVal = Math.abs(-5); // -> 5

// --- Math.floor() / Math.ceil() / Math.round() ---
// floor: rounds down, ceil: rounds up, round: rounds to the nearest integer.
const floorVal = Math.floor(4.9); // -> 4
const ceilVal = Math.ceil(4.1); // -> 5
const roundVal = Math.round(4.5); // -> 5

// =================================================================
// Data Structures
// =================================================================

// --- Map ---
// Holds key-value pairs and remembers the original insertion order of the keys.
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a")); // -> 1
console.log(map.has("b")); // -> true
map.delete("b");

// --- Set ---
// Lets you store unique values of any type.
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Will not be added again
console.log(set.has(1)); // -> true
set.delete(2);
console.log(set.size); // -> 1
