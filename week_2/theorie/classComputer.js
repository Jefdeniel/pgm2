class Computer {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  startUp() {
    return `Computer is starting...`;
  }
}

class Laptop extends Computer {
  // this.#RamMem = 16; moet dan uit de constructor en de this. mag ook weg
  public #RamMem = 16;

  // je hebt public, private en protected => kunnen enkel maar gebruikt worden in TypeScript files

  constructor(brand, color, touchScreen) {
    this.brand = brand;
    this.color = color;
    super(brand, color); // Met de super vraag je de eigenschappen van de superklasse oftewel die daarboven op (extends dus)
    this.touchScreen = touchScreen;
    laptop.numbersOfLaptops++; // Dan moet je het niet zo volledig uitschrijven zoals je anders zou doen
  }

  startUp() {
    let msg = super.startUp();
    msg += `It boots fasts bc i'm a good laptop`;
    return msg;
  }

  charge() {
    return `The laptop is charging... `;
  }

  #privateCharge() {
    return `Laptop is charging suuuuuuperfast`
  }

  hiddenCharge() {
    return this.#privateCharge()
  }
  set RamMem(mem) {
    this.#RamMem += mem;
  }
  get ramMem() {
    return this.#RamMem;
  }

  // static destroy = "Laptops are destroyed"; // Op deze manier slaat het direct op de klasse zelf
  static numbersOfLaptops = 0;
}

console.log(Laptop.destroy);

const laptop1 = new Laptop("acer", "gray", true);
console.log(laptop1.startUp());
laptop1.RamMem = 16;
console.log(`Laptop has ${laptop1.#RamMem} GB of RAM`);

const laptop2 = new Laptop("lenovo", "blue", true);
const laptop3 = new Laptop("macbook super pro", "red", true);

console.log(laptop1.hiddenCharge())


console.log(Laptop.numbersOfLaptops);

// cont computer1 = new Computer();
// console.log(computer1.charge(); // Output: error
