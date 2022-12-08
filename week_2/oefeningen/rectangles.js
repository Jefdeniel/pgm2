// Maak een bestand rectangles.js aan.

// Beschrijf een rechthoek via een constructor function Rectangle. De constructor bevat de volgende parameters:

// width (number)
// height (number)
// De waarde van deze parameters worden toegekend aan de corresponderende eigenschappen. De Rectangle klasse bevat de methoden:

// calcPerimeter() berekent en geeft de omtrek of perimeter terug van de rechthoek
// calcArea() berekent en geeft de oppervlakte terug van de rechthoek
// toString(): geeft een stringrepresentatie terug van een rechthoek, in dit geval de breedte en hoogte van de rechthoek
// toCLIString(): geeft een string terug die als output kan dienen in de console. Deze string is opgebouwd uit width, height, het resultaat uit calcPerimeter() en calcArea().
// Maak twee instanties aan van de Rectangle klasse via het new keyword. Voeg deze instanties toe aan een array rectangles. Doorloop deze array en spreek voor ieder element de toCLIString() methode aan en log het resultaat ervan in de commandline.

function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.calcPerimeter = function calcPerimeter(width, height) {
    // function mag gewoon function (){} zijn, hoeft niet function calcPerimeter (width, height) te zijn
    //   const perimeter = width * 2 + height * 2;
    //   return `
    // The perimeter of the rectangle is ${perimeter}`;
    return this.width * 2 + this.height * 2;
  };

  // this.calcArea = function calcArea(width, height) {
  //   const area = width * height;
  //   return `
  //   The area of the rectangle is ${area}`;
  // };

  this.calcArea = function () {
    return this.width * this.height;
  };

  this.toString = function () {
    return `
    Rectangle\t${this.width}x${this.height};
     `;
  };

  this.toCLIString = function () {
    // ${this.toString()} was ik vergeten, voor de rest redelijk goed, als je dat doet hoeft Width:\t${this.width} niet meer en kan je hieronder enkel perimeter en area toevoegen nog en dan komt dat op hetzelfde neer
    return `
    ================================================================================
    ${this.toString()} 
    ================================================================================
    Perimeter:\t${this.calcPerimeter()}
    Area:\t${this.calcArea()}
    ================================================================================
    `;
  };
}

let rectangle = new Rectangle(20, 40);
console.log(rectangle.toCLIString());
