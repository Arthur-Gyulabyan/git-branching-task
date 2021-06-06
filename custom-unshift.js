Array.prototype.customUnshift = function (...num) {
    let newArr = [...num, ...this];
    for (let i = 0; i < newArr.length; i++) {
        this[i] = newArr[i];
    }
    return this.length;
};
let arr = [4, 5, 6, 7];
console.log(arr.customUnshift(1, 2, 3));
console.log(arr);
