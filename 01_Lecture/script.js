let str1 = "My name is Sachin";
let value1 = str1.includes("Sachin");
// console.log(value1);

// console.log(str1.indexOf("name"));

// console.log(str1.replace("name", "self"));

// console.log(str1.replaceAll("My name is Sachin", "THis is sachin"));

// console.log(str1);

let str2 = "This is also me";
// console.log(str1.concat(" ", str2));

// console.log(str1);

const lastFourDigits = '7895';
lastFourDigits.padStart(16, '*');
console.log(lastFourDigits);

lastFourDigits.padEnd(17, '#');
console.log(lastFourDigits);

const charValue = str1.charAt(4);
console.log(charValue);

console.log(str1.charCodeAt(4));//CharCodeAt is used to find the ASCII value of any character;

// console.log(str1.split());
// console.log(str1.split(''));
console.log(str1.split(' '));


// let liTag = document.createElement("li");
// liTag.textContent = lastFourDigits.padStart(16, '*');
// document.body.appendChild(liTag);
