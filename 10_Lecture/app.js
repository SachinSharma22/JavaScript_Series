const obj1 = {
    name: "sachin"
};

Object.seal(obj1);
console.log(obj1.name);


// We can't delete the object values after applying seal() method
delete obj1.name;
console.log(obj1.name);


// We can't add new properties to the object after sealed it
obj1.age = 23;
console.log(obj1);

//But we can modify the existing properties
obj1.name = "Sharma";
console.log(obj1);

//Object.freeze()

const obj2 = {
    name: "sachin",
    age: 23
};
console.log(obj2);
Object.freeze(obj2);

// We can't delete the object values after applying freeze() method
delete obj2.name;
console.log(obj2);


// We can't add new properties to the object after sealed it
obj2.num = 2223;
console.log(obj2);

//while using Object.freeze() method you can't modify the existing values
obj2.age = 33;
console.log(obj2);



//in is used to search any key in object

console.log('age' in obj2);