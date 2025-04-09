let a = 10;

function sum(b) {
    let c = 20;

    return a + b;
}
console.log(sum(4));
// console.log(c);


//lexical scope

function outerFunction() {
    const name = "sachin";
     function innerFunction() {
        console.log(name);
     }

     return innerFunction();
}

outerFunction();



//Block scope

{
    let c = 110;
    console.log(c);
}


// Here you will see the output that c is not defined

// console.log(c);