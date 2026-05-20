const person = {
    name: "ravu",
    greet() {
        console.log(`Hi, This is ${this.name}`);
    }
}
person.greet()

let ravuFinder = person.greet
muskanLover();

const boundGreet = person.greet.bind({name: 'sachin'});
boundGreet()