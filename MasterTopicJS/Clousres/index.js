// function x() {
//     let a = 12;
//     let b = 34;
//     console.log(b);
//     function y() {
//         console.log(a);
//     }
//     return y();
// }

// x();

// if(Math.random() > 0.5 ) {
//     var x = 1;
// }else {
//     var x = 2;
// }

// console.log(x);
// if(Math.random() > 0.5 ) {
//     const x = 1;
// }else {
//     const x = 2;
// }

// console.log(x);

// CLOUSRE

// function makeFun() {
//     const name = "sukhu";
//     console.log("ravi")
//     function displayName() {
//         console.log(name);
//     }

//     return displayName;
// }

// let mf = makeFun();
// mf();


// a makeAdder function:
function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

let val1 = makeAdder(10);
let val2 = makeAdder(4);

console.log(val1(3));
console.log(val2(3));