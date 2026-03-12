/*
 * Matching Queries
 *
 * Description:
 * Given a string and a list of character indices (queries), find the index of
 * the nearest matching character for each query. If two matching characters
 * are the same distance from the query, return the one with the lower index.
 * If no matching character exists, return -1.
 *
 * Constraints:
 * - length of s, queries[i] <= 10^5
 * - 1 <= n <= 10^5
 * - s will contain only lowercase English letters, ascii[a-z]
 *
 * Example 1:
 * s = "babab", queries = [2] => [0]
 * s[2] = 'b', nearest matches at indices 0 and 4 (both distance 2).
 * Distances are equal, so return the lower index: 0.
 *
 * Example 2:
 * s = "hackerrank", queries = [4, 1, 6, 8] => [-1, 7, 5, -1]
 * s[4] = 'e' -> no other 'e' -> -1
 * s[1] = 'a' -> nearest 'a' is at index 7 -> 7
 * s[6] = 'r' -> nearest 'r' is at index 5 -> 5
 * s[8] = 'n' -> no other 'n' -> -1
 *
 * Approach:
 * 1. Pre-build a map of char -> sorted list of all indices where it appears.
 * 2. For each query index q, binary search in the sorted list to find the
 *    immediate left and right neighbors of q. Compare their distances and
 *    return the closest one (lower index on tie).
 *
 * Time Complexity:  O((s.length + n) * log(s.length))
 * Space Complexity: O(s.length)
 */

function matchingQueries(s, queries) {
    // Build map: char -> sorted array of indices
    const charIndices = {};
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!charIndices[c]) charIndices[c] = [];
        charIndices[c].push(i);
    }

    return queries.map(q => {
        const indices = charIndices[s[q]];

        // Only one occurrence means no other matching character
        if (indices.length === 1) return -1;

        // Binary search for the position of q within the sorted indices array
        let lo = 0, hi = indices.length - 1;
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (indices[mid] < q) lo = mid + 1;
            else hi = mid;
        }
        // indices[lo] === q; check immediate left and right neighbors

        let best = -1;
        let bestDist = Infinity;

        if (lo > 0) {
            const leftIdx = indices[lo - 1];
            const dist = q - leftIdx;
            if (dist < bestDist) {
                bestDist = dist;
                best = leftIdx;
            }
        }

        if (lo + 1 < indices.length) {
            const rightIdx = indices[lo + 1];
            const dist = rightIdx - q;
            // Strictly less than: on equal distance, left index is always smaller
            if (dist < bestDist) {
                bestDist = dist;
                best = rightIdx;
            }
        }

        return best;
    });
}

// --- Tests ---
console.log(matchingQueries("babab", [2]));               // [0]
console.log(matchingQueries("hackerrank", [4, 1, 6, 8])); // [-1, 7, 5, -1]
