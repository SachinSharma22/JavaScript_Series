
/*function createGreet(greet){
    return function (name) {
        console.log(`${greet} ${name}`);
    }
}

const greetFunction = createGreet('Hello');

greetFunction("sachin");

const greetAnother = createGreet("hiii");
greetAnother("Mr. Sachin")*/



/*
function higherOrderFunction(callback) {
    console.log("higherOrder Function is executed...");

    callback();
}

function callbackFunction() {
    console.log("Call back function is executed...");
}

higherOrderFunction(callbackFunction);


function addition(callback) {
    console.log("THis is addition program..");
    console.log("In this function you can do anything and call another function...");

    callAnotherFunction();
}

function callAnotherFunction() {
    console.log("Here i can do anything ...");
    console.log("This function called after the addition function is fully executed...");
}

addition(callAnotherFunction());*/


//Map function

function doubleAllNumbers(array, operation) {
    return array.map(operation);
}

function double(number){
    return number *2;
}

const arr = [1,2,3,4,5];
const generateDoubleFunction = doubleAllNumbers(arr, double);
console.log(generateDoubleFunction);