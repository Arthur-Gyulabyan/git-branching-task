// Implementation of Array.prototype.pop()

Array.prototype.customPop = function () {
    const lastItem = this[this.length - 1];

    this.length = this.length - 1;

    return lastItem;
};

const arr = [12, 'asd'];

console.log(arr.customPop()); // ['asd']
console.log(arr); // [12]
