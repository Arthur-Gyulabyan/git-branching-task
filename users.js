class User {
    constructor(fname, lname, birthYear) {
        this.fname = fname;
        this.lname = lname;
        this.birthYear = birthYear;
    }

    greeting() {
        return `Hi ${this.fname}.`;
    }

    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}

const arthur = new User('Arthur', 'Gyulabyan', 1998);

console.log(arthur.greeting());
console.log(arthur.calcAge());
