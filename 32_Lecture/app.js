const colors = ["red", 'green', 'blue'];

const [first, second] = colors;
console.log(first);
console.log(second);

 
// You can even skip some items or use rest

const  [first1 , , third] = colors;

console.log(first1);
console.log(third);

//YOu can also use rest parameter to use other data

const [first2, ...other] = colors;

console.log(first2);
console.log(other);

const users = {
    name: "sachin",
    age: 23
};

const {name, age} = users;

console.log(name);
console.log(age);

function userDetail({name, age}) {
    console.log(name);
    console.log(age);
}

userDetail(users)