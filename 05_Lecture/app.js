let userAge = 18;
const isSchoolstudent = (userAge >=15) && (userAge <=18);
const isCollegeStudent = (userAge >=19) && (userAge <= 25);
console.log(isCollegeStudent);
console.log(isSchoolstudent);

const andResult = 0 && 2;
const orResult = 0 || 2;
console.log(andResult);
console.log(orResult);

console.log(Boolean(0 || 2));
console.log(Boolean( 0 && 2));

//guess output of the below lines
console.log(Boolean('' && 'Hello'));
console.log(Boolean('' || 'Hello'));

console.log('hello' && null);
console.log('hello' || null);

console.log('hello' && undefined);
console.log('hello' || undefined);

console.log('hello' && NaN);
console.log('hello' || NaN);

console.log('hello' && 4 +8);
console.log('hello' || 4 +8);

console.log('hello' && -4 + 4);

console.log('hello' && console.log('hello'));
console.log('hello' || console.log('hello'));
console.log(undefined || console.log('hello'));
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!null);
console.log(!undefined);
console.log(!!true);
console.log(!!false);

let result = console.log('hello');
console.log(result);



let a = 7;
if(a > 5 && a %2 === 0){
    console.log(`${a} is greater than 5 and an even number`);
}else  if(a > 5 && a %2 != 0){
    console.log(`${a} is greater than 0 but not an even number`);
}else if( a< 5 || a%2 == 0){
    console.log(" a is either less than five or even number");
}else{
    alert("Enter a valid number");
}