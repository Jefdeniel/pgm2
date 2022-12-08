function Table({ numberOfLegs, color, price = null }) {
  this.numberOfLegs = numberOfLegs;
  this.color = color;
  this.price = price;
  this.chairs = [];
  this.changeColor = function (color) {
    const prevColor = this.color;
    this.color = color;
    return `The color was ${prevColor} and is now ${color}`;
  };
  this.addChair = function (chair) {
    // functie in een object is dus een methode
    // add chair to array -> eerst array aanmaken
    this.chairs.push(chair);
  };
  // this.toString = function () {
  //   return `
  //   Object Table
  //   Color: ${this.color}`
  //   Number Of Legs: ${this.numberOfLegs}
  //   Price: ${this.price}
} // Hier zit nog ergens een fout maar ikd waar lol
// }

function Chair({ color }) {
  this.color = color;
  this.toString = function () {
    return `
    Object Chair 
    Color: ${this.color}
    `;
  };
  this.toCLIString = function () {
    return `
    --------------
    ${this.toString()}
    --------------
    Chairs

    ${this.chairs.map((chair) => chair.toString()).join(`\n`)}
    `;
  };
}

console.log(Table.color);

// Eerste manier om een tafel te maken
const table1 = new Table({ color: "brown" });
table1.addChair(new Chair({ color: "red" }));
table1.addChair(new Chair({ color: "blue" }));

table1.addChair("orange");

console.log(table1.toCLIString());
// console.log(table.toString());
// console.log(table1.changeColor("red"));

// table1.numberOfLegs = 5;
// table1.changeColor = "pink";

// const table2 = new Table(3, "brown");

// const tableEmpty = new Table();

// console.log(table1);
// console.log(table2);

// Tweede manier om een tafel te maken: object literal als voorbeeld
//  als je niet alle informatie ingeeft dan is dit gewoon undefined
// const table4 = {
//   numberOfLegs: 4,
//   color: "green",
// };

// console.log(tableEmpty);

function Car({ color, brand, electric = false }) {
  this.color = color;
  this.brand = brand;
  this.electric = electric;

  this.drive = function () {
    if (electric) return "zzzzzzzzzzzzz";
    return "vroemvroem";
  };
}

const Car1 = new Car({ color: "green", brand: "BMW", electric: true });
const Car2 = new Car({ color: "pink", brand: "Volvo", electric: false });
console.log(Car1.drive());
console.log(Car2.drive());
