// const user = require("./user");
// console.log(`User: ${user.getName()}`);

const User = require("./user");
const user = new User("Philippe", 37, "drdynscript@gmail.com");
console.log(user.toCLIString());
