function solution(N) {
    const binary = N.toString(2);
    let longestZeroSequence = 0;
    let tempLongestZeroSequence = 0;
    let binaryGap = false;

    for(i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            tempLongestZeroSequence++;
        } else {
            tempLongestZeroSequence = 0;
        }

        if (binary[i] === '1' && i > 0) {
            binaryGap = true;
        }

        // console.log('>>> bin', binary[i]);
        // console.log('>>> temp', tempLongestZeroSequence);
        // console.log('>>> long', longestZeroSequence);

        if (tempLongestZeroSequence > longestZeroSequence) {
            longestZeroSequence = tempLongestZeroSequence;
        }
    }

    return binaryGap ? longestZeroSequence : 0;
}
