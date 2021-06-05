// Deep copy

const deepCopy = (obj) => {
    let objCopy = {};

    for (const key in obj) {
        const curValue = obj[key];

        if (typeof curValue === 'object' && curValue) {
            objCopy[key] = deepCopy(curValue);
        } else {
            objCopy[key] = curValue;
        }
    }

    return objCopy;
};

const obj = {
    fullName: {
        name: 'aaa',
        lastName: 'bbbb',
        aaa: {
            lll: 'asd',
            jjj: 12,
        },
    },

    age: 20,
};

const objCopy = deepCopy(obj);
console.log(objCopy === obj); // false
