// It works on function declaration 
function add () {
    console.log(arguments);
}

add(1,2,3,4,5);

function sum() {
    for(let i = 0; i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

sum(1,2,3,4);

function sum1() {
    let sum = 0;
    for(let i=0; i<arguments.length;i++){
        sum +=arguments[i];
    }
    console.log(sum);
}

sum1(1,2,3,4,5);

let sum2 = function () {
    let sum = 0;
    for(let i=0; i<arguments.length;i++){
        sum +=arguments[i];
    }
    return sum;
}

let result = sum2(1,2,3,4,5);
console.log(result);


//It also works on function expression

const add1 = function () {
    console.log(arguments);
}

add1(1,2,3);

//It not works on (ES6+)
//It not works on arrow function

// let add2 = () => {
//     console.log(arguments);
// }

// Uncaught ReferenceError: arguments is not defined
// at add2 (app.js:20:17)
// at app.js:23:1

// add2(1,2,3,4);

