const arr = [1,2,3,4];
const arr1 = [5,6,7,8];

let resultArr = [...arr, ...arr1];

console.log(resultArr);

function addResultArr() {
    let sum = 0;
    for(let i = 0; i< arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(addResultArr(...resultArr));

const obj1 = {
    name: 'sachin',
    age: 23
};

const obj2 = {...obj1, city: "rasra"};
console.log(obj2);