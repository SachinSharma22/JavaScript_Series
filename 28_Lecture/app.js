// We learn about .some() in this file

const numbers = [1,2,3,4,5];

const hasEven = numbers.some((num) => {
    return num %2 ===0;
});

console.log(hasEven);

const str = ["mango", "apple", "banana", "orange"];

const res = str.some((fruit) => {
    return fruit === "apple";
});
console.log(res);

const users = [
    {name: "sachin", online: true},
    {name: "sachin1", online: true},
    {name: "sachin2", online: false}
];

const hasOnline = users.some((user) => {
    return user.online;
});

console.log(hasOnline);

const fields = ['name', '','email'];

const hasEmpty = fields.some((field) => {
    return field.trim() === '';
});

console.log(hasEmpty);

const evenNum = [0,2,3,4,6,8];
let foundIndex = -1;

const hasOdd = evenNum.some((num, index) => {
    if(num %2 === 1) {
        foundIndex = index;
        return true;
    }
    return  num%2 === 1;
});

console.log(foundIndex);
console.log(hasOdd);