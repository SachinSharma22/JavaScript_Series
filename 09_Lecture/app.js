const user = {
    firstName: "sachin",
    lastName: "sharma",
    age: 23,
    education: "BCA",
    city: "rasra"
};

console.log(user["firstName"]);

// let arr = [[1,2,3],[1,2,3],[1,2,3]];
// console.log(arr[1][1]);


// //objects in JavaScript

// let intro = {
//     myName: "sachin",
//     age: 23,
//     stream: "BCA",
//     university:"PRSU",
//     hight: 172,
//     weight: 74
// }
// console.log(intro.myName);
// console.log(intro["myName"]);

// intro["stream"] = "BCA Final Year";
// console.log(intro);
// intro.stream = "BCA 3 Year";
// console.log(intro.stream);

// let myAge = "age";
// console.log(myAge);
// console.log(intro[myAge]);
// intro[myAge] = 24;
// console.log(intro[myAge]);

// let myCar = {
//     make: "volvo",
//     model: "volvo v3"
// };
// let carColor = "color";
// myCar[carColor] = "red";
// console.log(myCar);

// let forSaleValue = "forSale"
// myCar[forSaleValue] = "available";
// console.log(myCar.model);
// console.log(myCar.make);

// console.log(myCar[forSaleValue]);


// Object in Object
// let company = {
//     companyName : "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipCode: "33233",
//         city: "rasra",
//         state: "Up"
//     },
//     yearOfEstablishment: 2021
// };

// console.log(company.address.zipCode);
// console.log(company["address"]["number"]);
// company["address"]["number"] = "838838";
// console.log(company["address"]["number"]);

// Array in objects

/*
let company = {
        companyName : "Healthy Candy",
        activity: ["food manufacturing", "improving kids", "health", "manufacturing toys"],
        address: {
            street: "2nd street",
            number: "123",
            zipCode: "33233",
            city: "rasra",
            state: "Up"
        },
        yearOfEstablishment: 2021
    };
    console.log(company.activity[0]);

    // Objects in Arrays
    let address = [
        {street: "2nd stree",
            number: "2222",
            zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 {
 street: "1st West avenue",
 number: "5",
 zipcode: "75001",
 city: "Addison",
 state: "Texas"
 }
    ];

console.log(address[0].street);
console.log(address[1].number);

let ques = [
    {
        question: "What is the capital of Up",
        option : ["Kanpur", "Goa","Lucknow"],
        answer: "Lucknow"
    },
    {
        question: "What is 2 + 2",
        option: [2,3,4,5],
        answer: 2
    }
];
console.log(ques[0].question);
console.log(ques[0].answer);

let people = {
    friends:[],
   
};
let friend1 = {
    fName:"Abhishek",
    lName: "maurya",
    id: "22sbca"
};
let friend2 = {
    fName:"Shubham",
    lName: "Gupta",
    id: "22sbca09"
};
let friend3 = {
    fName:"Nandlal",
    lName: "Jayaswal",
    id: "22sbca094"
}

people.friends.push(friend1, friend2, friend3);
console.log(people.friends);

const theList = ['Laurence', 'Svekis', true, 35, null, undefined];

theList.pop();
theList.pop();

console.log(theList);
theList.shift();
console.log(theList);
theList.unshift("FIRST");
console.log(theList);

theList.splice(2,2,"MIDDLE","Hello World", "Last");
console.log(theList);
*/
    

//Compny product catalog

let store = [];
const item1 = {
    name : "product1",
    model: "v3",
    cost: "233",
    quantity: "112"
};
const item2 = {
    name : "product2",
    model: "v4",
    cost: "213",
    quantity: "199"
};
const item3 = {
    name : "product3",
    model: "v5",
    cost: "200",
    quantity: "1076"
};

store.push(item1, item2, item3);

// console.log(store);

console.log(store[2].quantity);

//Self Check Quiz

const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));

const myArr2 = [];
myArr2[10] = 'test'
// console.log(myArr2);
// console.log(myArr2[2]);


const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);

// If you want to delete any key from object simply use delete keyword front of that key

delete item1.model;
// console.log(item1);