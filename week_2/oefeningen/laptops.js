// Maak een bestand laptops.js aan.

// Beschrijf een computer via een constructor function Laptop. De constructor bevat de volgende parameters:

// naam (string)
// resolution (string)
// storage (string)
// processor (string)
// De waarde van deze parameters worden toegekend aan de corresponderende eigenschappen. De Laptop klasse bevat de methoden:

// toString(): geeft een stringrepresentatie terug van een laptop, in dit geval de naam van de laptop
// toCLIString(): geeft een string terug die als output kan dienen in de console
// Maak twee instanties aan van de Laptop klasse via het new keyword. Spreek voor iedere instantie de toCLIString() methode aan en log het resultaat ervan in de commandline.

function Laptop(name, resolution, storage, processor) {
  this.name = name;
  this.resolution = resolution;
  this.storage = storage;
  this.processor = processor; // Tot hier was het allemaal sowieso juist! noice

  this.toString = function (name) {
    return `
    Laptop\t${this.name} 
    `; // Hier was ik de this. vergeten en het woordje laptop vooraf
  };

  // this.toCLIString = function () {
  //   console.log(`${name}`);
  // };

  // Dit was niet volledig zoals het moest, onduidelijke opgave wel impo maar soit

  this.toCLIString = function () {
    return `
    ================================================================================
    ${this.toString()}
    ================================================================================
    Resolution:\t${this.resolution}
    Storage:\t${this.storage}
    Processor:\t${this.processor}
    ================================================================================
    `;
  };
}

// Hier had ik eerst const maar het moest let zijn, {} was ook niet nodig
let Laptop1 = new Laptop("Lenovo", "1920 by 1080", "256gb", "2.1GHz");
console.log(Laptop1.toCLIString());

let Laptop2 = new Laptop("MacBook Pro", "2080 by 3000", "512gb", "2.8GHz");
console.log(Laptop2.toCLIString());
