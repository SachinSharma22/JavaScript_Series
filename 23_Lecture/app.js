// const fruits = ["apple", "mango","grapes","banana","orange"];

// for(let i=0; i<fruits.length;i++){
//     console.log(`${i+1} ${fruits[i]}`);
// }

// for(let fruit of fruits){
//     console.log(`${fruit}`);
// }

// const str = "Sachin Sharma";
// for(s of str){
//     console.log(s);
// }

// const person = {
//     firstname: "Sachin",
//     lastName : "Sharma",
//     age: 23,
//     eyeColor: "black",
//     city: "London"
// }
// for(key in person) {
//     console.log(` ${key}: ${person[key]}`);
// }

// const personKeys = Object.keys(person);
// console.log(personKeys);

// const personValues = Object.values(person);

// console.log(personValues);


// const randomValue = "sachin sharma";
// const splitValue = Object.values(randomValue)
// const ra = Object.values("Saurabh sharma");
// console.log(ra)
// console.log(splitValue);

const fruits = ["apple", "mango","grapes","banana","orange"];

// fruits.forEach((fruit) => {
//     console.log(fruit);
// })

// let hobby = "dancing";
// if(hobby == "coding"){
//     console.log("I love coding too");
// }else{
//     console.log("I love dancing");
// }
let hobby = "dancing";
if(hobby = "coding"){
 console.log("** I love coding too! **");
} else {
 console.log("** Can you teach me that? **");
}

const q = '1';
switch (q) {
 case '1':
 answer = "one";
 break;
 case 1:
 answer = 1;
 break;
 case 2:
 answer = "this is the one";
 break;
 default:
 answer = "not working";
}
console.log(answer);

const qe = 1;
switch (qe) {
 case '1':
 answer = "one";
 case 1:
 answer = 1;
 case 2:
 answer = "this is the one";
 break;
 default:
 answer = "not working";
}
console.log(answer);

const userNames = ["Mike", "John", "Larry"];
const userInput = "John";
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
 htmlOutput = "Welcome, that is a user";
} else {
 htmlOutput = "Denied, not a user ";
}
console.log(htmlOutput + ": " + userInput);



