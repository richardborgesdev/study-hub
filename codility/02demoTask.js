// smallest positive

function solution(A) {
    // Create a Set for efficient lookups of elements in A.
    const numSet = new Set(A);

    // Start checking for positive integers from 1.
    let smallestPositive = 1;

    // Keep incrementing until we find a positive integer
    // that is not in the set.
    while (numSet.has(smallestPositive)) {
        smallestPositive++;
    }

    // Return the smallest positive integer not found in the set.
    return smallestPositive;
}

console.log(`smallest positive [1,2,6,4,2,1] ${solution([1,2,6,4,2,1])}`)
