function Person(firstName, lastName, age = null) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.children = [];
  this.tostring = function () {
    return `Person with ${this.firstName} as first name and ${this.lastName} as last name`;
  };
  this.sayHello = function () {
    return `Hello i'm ${this.firstName} ${this.lastName}`;
  };
  this.addChild = function (child) {
    // add child to array
    this.children.push({
      child,
    });
  };
  this.toCLIString() = function () {
    return `
    ${this.tostring()}
    CHILDREN
    ${this.children.map( (child) => child.toCLIString() ).join(`\n`))}`
  }
}

const person1 = new Person({ firstName: "John", lastName: "Smith", age: 15 });
person1.addChild(new Person({ firstName: "John", lastName: "Smith" }));
console.log(person1);
