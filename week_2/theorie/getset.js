// Get en set =>

let obj = {
  firstName: "Jef",
  lastName: "De Niel",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    // Je kan dit met array constructoring aanpassen
    [this.firstName, ...this.lastName] = value.split(" "); // We gaan splitten op een spatie
    this.lastName = this.lastName.toString().replace(/,/g, " "); // \g staat voor global
  },
};

console.log(obj.fullName);

obj.fullName = "Dider De Wilde";
console.log(obj.fullName);

let bankAccount = {
  currentState: 0, // Je zit in een object dus zeker : ipv =
  set setCurrentState(value) {
    if (value < 0) {
      throw new Error("You can't have a value below zero");
      // return; // Deze lijkt me absoluut onnodig
    }
    this.currentState = value;
  },
};

// eerst de THROW, dan TRY, dan CATCH een error
try {
  bankAccount.setCurrentState = -4;
  console.log(`The state of your account is now ${bankAccount.currentState}`); // Dit geeft output als je balance positief is
} catch (error) {
  console.log(error.toString()); // Dit geeft output als je balance negatief is
}

function User(name, dateOfBirth) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.dateOfBirth.getFullYear();
    },
  });
}

let user = new User("Philippe", new Date(1984, 12, 12));
console.log(`Your age is ${user.age}`);
