// Function declaration
function square(num) {
    return num *num;
}

console.log(square(4));


//Function Expression in JavaScript
const square1 = function(num){
    return num * num;
}

const result = square1(4);
console.log(result);

//Arrow Function

const square2 = (num) => {
    return num * num;
}

const result1 = square2(4);
console.log(result1);


//Arrow function return value without using return keyword in JavaScript but you hava to write all you expression in one line without using {} bracket
const square3 = (num) => num * num
const result2 = square3(4);
console.log(result2);

setTimeout(() => {
    console.log("Here we practice for arrow function");
}, 2000);

const random = () => {
    return Math.floor(Math.random() * 10) +1;
}

const val = random()
console.log(val);
