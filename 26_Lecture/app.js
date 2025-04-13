const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumbers = numbers.filter((num) => {
    return num % 2 == 0;
});

console.log(evenNumbers);

//filtering objects

const users = [
    {name: 'sachin', active: true},
    {name: 'saurabh', active: false},
    {name: 'pawan', active: true}
];

const activeUsers = users.filter((user) => {
    return user.active;
});
console.log(activeUsers);

//removing falsy value

const mixed = [0, 'hello', false, 42, '', null];

const truthy = mixed.filter(Boolean);
console.log(truthy);

const products = ['iphone', 'ipad', 'macBook', 'AirPods'];

const search = 'ip';

const results = products.filter((item) =>{
    return item.toLowerCase().includes(search.toLowerCase());
});

console.log(results);


let fruits = ["apple", "mpple", "cpple", "nothing"];
const search1 = 'pp';

const result1 = fruits.filter((fruit) => {
    // return fruit.toLowerCase().includes(search1.toLowerCase());

    return fruit.length > 5;
});

console.log(result1);


const students = [
    {name:'sachin', age:23},
    {name:'saurabh', age:21},
    {name: 'pawan', age:14}
];

const res = students.filter((ages) => {
    return ages.age>18;
});
console.log(res);

