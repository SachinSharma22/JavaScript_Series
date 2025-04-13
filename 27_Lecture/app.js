const numbers = [1,2,3,4,5];

const total = numbers.reduce((sum, num) => sum+num, 0);

console.log(total);

// const total = numbers.reduce((sum, num) => {
//     return sum + num;
// });
// console.log(total);

//Find maximum

const nums = [22,34,354,89, 23];

const max = nums.reduce((max, num) => (num > max ? num : max), nums[0]);

console.log(max);

const arr = [1,2,3,4,5];


let ress = arr.reduce((a, curr) => {
    return a * curr;
},1);

console.log(ress);

// arr.reduce((a, curr, i) => {
//     console.log(i, curr);
// },1)

// const rest = arr.reduce((a, curr) => {
//     return curr;
// }, 10);

// console.log(rest);