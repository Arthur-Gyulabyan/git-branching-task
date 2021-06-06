// Implementation of Array.prototype.shift()

Array.prototype.customShift = function () {
    if (this.length === 0) {
        return;
    }

    const firstItem = this[0];

    for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }

    this.length--;
    return firstItem;
};

const numbers = [1, 2, 3];
numbers.customShift();
console.log(numbers); // [2, 3]
