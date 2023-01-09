// const getName = () => {
//   return "Slim Shady";
// };

// exports.getName = getName;

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.toCLIString = () => {
    return `
Name: ${this.name}
Age: ${this.age}
Email: ${this.email}
    `;
  };
}
module.exports = User;
