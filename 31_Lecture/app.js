let num = [1,2,3,54];

function add(...nums) { //Rest parameter which also store all the value in an array by default
//     let sum = 0;
//     console.log("nums :", nums);
//     for(let i=0; i<nums.length;i++){
//         sum += nums[i];
//     }
//     return sum;

return nums.reduce((a,curr) => {
    return a + curr;
});

}

const result = add(...num);
console.log(result);

// console.log(add(...num));// Spread operator to copy the property of num array

//You can also pass some value when you call the function and then use rest Parameter for rest of all value

// console.log(add(6,7,...num));

