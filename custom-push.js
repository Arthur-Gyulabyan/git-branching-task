// Implementation of Array.prototype.push()

Array.prototype.customPush = function (...item) {
    for (let i = 0; i < item.length; i++) {
        this[this.length] = item[i];
    }

    return this.length;
};

const numbers = [1, 2, 3];

numbers.customPush(4);
console.log(numbers.customPush(5, 6)); // 6

console.log(numbers); // [1, 2, 3, 4, 5, 6]
