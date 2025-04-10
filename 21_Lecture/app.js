const a = 4;
const b = 6;

function parent() {
    function add() {
        console.log(a +b);
    }
    return add();    
}
const add1 = parent();
// console.log(add1);
console.dir(add1);