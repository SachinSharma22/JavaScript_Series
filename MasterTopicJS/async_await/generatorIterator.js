// To make a function generator put * next to keyword function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
console.log(gen.next().val);