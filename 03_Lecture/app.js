const greet = " sachin";
console.log(`Hello ${greet.repeat(3)}`);

const a = ' *';
console.log(a.repeat(3));

"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
console.log("abc".repeat(1 / 0));