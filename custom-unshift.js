// Implementation of Array.prototype.unshift()

Array.prototype.customUnshift = function (...item) {
    const newArr = [...item, ...this];

    for (let i = 0; i < newArr.length; i++) {
        this[i] = newArr[i];
    }

    return this.length;
};

const numbers = [4, 5, 6, 7];

console.log(numbers.customUnshift(1, 2, 3));
console.log(numbers);
