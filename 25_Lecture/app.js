let myMap = new Map();
myMap.set('color', 'blue');
myMap.set(123, 'number');
myMap.set(true, 'boolean');

console.log(myMap.get('color'));
console.log(myMap.has(123));
console.log(myMap.size);
myMap.delete(true)
console.log(myMap.has(true));

// You can iterate on map

for(let key of myMap.keys()){
    console.log(key);
}

const months = ["january", "febrauray", "march", "april", "may", "june"];

const result = months.map((month) => {
    console.log(month);
    return month.toUpperCase();
});

const value = months.map((num, index) => {
    console.log(index, num);
    return index, num;
});
console.log(value);

console.log(result);

let arr = [1,2,3,4,5,6,7,8,9];

let result1 = arr.map((num) => {
    return num % 2 === 0;
});

console.log(result1);

let result2 = arr.map((num) => {
    return num *2;
});

console.log(result2);