//We learn about .every() in this file

const numbers = [2,4,6,8];

const allEven = numbers.every((num) => {
    return num % 2 ===0;
});

console.log(allEven);

const fields = ['name', 'email', 'password'];

const isValid = fields.every((field) => {
    return field.trim() !== '';
});

console.log(isValid);

const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: true },
    { name: 'Charlie', active: false }
  ];

  const activeUser = users.every((user) => {
    return user.active;
  });

  console.log(activeUser);