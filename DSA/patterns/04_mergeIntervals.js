// 4. Merge Intervals
// For problems involving overlapping intervals.
// Time Complexity: O(N * logN) due to sorting the intervals.
// Space Complexity: O(N) for the output array that stores merged intervals.
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function mergeOverlappingIntervals(intervals) {
  // Return if there are no intervals to merge
  if (intervals.length < 2) {
    return intervals;
  }

  // Sort intervals based on their start time
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
    const currentInterval = intervals[i];

    // Check for overlap between the last merged interval and the current interval
    if (currentInterval.start <= lastMergedInterval.end) {
      // If they overlap, merge them by updating the end of the last merged interval
      lastMergedInterval.end = Math.max(
        lastMergedInterval.end,
        currentInterval.end
      );
    } else {
      // If they don't overlap, add the current interval to the list
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

// --- Example ---
const intervals = [
  new Interval(1, 3),
  new Interval(2, 6),
  new Interval(8, 10),
  new Interval(15, 18),
  new Interval(14, 17),
];
console.log(
  "Merged intervals: ",
  mergeOverlappingIntervals(intervals).map((i) => `[${i.start},${i.end}]`)
);
// Output: Merged intervals:  [ '1,6', '8,10', '15,18' ]
