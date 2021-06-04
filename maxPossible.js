const maxPossible = (num1, num2) => {
    // Turn number to array of digits.
    const [numArr1, numArr2] = [
        String(num1).split('').map(Number),
        String(num2).split('').map(Number)
    ];

    const result = numArr1.map(digit => {
        // Find the max digit and its index from numArr2.
        const max = Math.max(...numArr2);
        const indexOfMax = numArr2.indexOf(max);

        // Compare digits and swap them if necessary.
        if (digit < max && numArr2.length !== 0) {
            // Swap and delete digit from second array at the same time.
            return numArr2.splice(indexOfMax, 1)[0];
        } else {
            return digit;
        }
    });

    return Number(result.join(''));
};

console.log(maxPossible(523, 76)); // 763
console.log(maxPossible(9132, 5564)); // 9655
console.log(maxPossible(8732, 91255)); // 9755
