const human = {
    walk() {
        console.log("Walking");
    }
}

const student = {
    study() {
        console.log("Studying")
    }
}

student.__proto__ = human;

student.walk();