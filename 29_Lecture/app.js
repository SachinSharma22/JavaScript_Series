function add (a , b) {
    return a + b;
}

console.log(add(2,3));
console.log(add(2, null));
console.log(add(2,undefined));


//default parameter

function add1(a = 2, b = 5){
    return a + b;
}
console.log(add1((3 *4), (8/2)));
console.log(add1(undefined, 8));
console.log(add1(null, 2));

//multiplication

function multiply(a = 5, b = 8){
    return a * b;
}

console.log(multiply(2));
console.log(multiply(2,3));
console.log(multiply(2,null));
console.log(multiply(2,undefined));
console.log(multiply(2,'dfh'));
console.log(multiply(2,''));