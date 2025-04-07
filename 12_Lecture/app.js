// let obj1 = {
//     name: "sachin",
//     age: 23,
    
// };
// console.log(obj1);

// let obj2 = {...obj1};
// console.log(obj2);

// obj2.num = 123;
// console.log(obj1);
// console.log(obj2);

let obj1 = {
    name: "sachin",
    age: 23,
    address: {
        city: "rasra",
        dist: "ballia"
    }
};
let obj2 = {...obj1};
console.log(obj1);
console.log(obj2);

// Now we try to  add a value to obj2
obj2.num = 123;
// Print both again
console.log(obj1);
console.log(obj2);

// Now try to change or add some value in address in obj2 and then console both

obj2.address.zip = 22133;

// Now with this change you can see that when the object or array is nested the spread operator not copy the inside object or array on different address 
// This method is called shallow copy
console.log(obj1);
console.log(obj2);


// If you want to copy from deep of any object or array into another then you try deep copy method



