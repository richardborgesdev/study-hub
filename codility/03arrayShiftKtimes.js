/*
P stack
I array [3, 8, 9, 7, 6], number 1
O array [6, 3, 8, 9, 7]
C N and K: 0 to 100, elements in array: -1000 to 1000
O time: O(A.length), space: O(A.length)
E empty, smallest, order, random, negative
*/

function solution(A, K) {
    const isOutputEqualInput = A.length === K;

    if (isOutputEqualInput) {
        return A;
    }

    const outputArray = [];

    for(index = 0; index < K - 1; index++) {
        element = A.shift();
        outputArray.push(element);

        // console.log(`${A} | ${element} | ${outputArray}`);
    }

    return [...A, ...outputArray];
}

// Improved solution
function solutionB(A, K) {
    if (A.length === 0) {
        return [];
    }

    const rotations = K % A.length;

    if (rotations === 0) {
        return A;
    }

    const partToMove = A.slice(-rotations);
    const restOfArray = A.slice(0, A.length - rotations);

    return [...partToMove, ...restOfArray];
}
