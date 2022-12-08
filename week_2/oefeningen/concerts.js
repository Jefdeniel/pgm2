function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.calcPerimeter = function () {
    return this.width * 2 + this.height * 2;
  };

  this.calcArea = function () {
    return this.width * this.height;
  };

  this.toString = function () {
    return `Rectangle:\t${this.width}x${this.height}`;
  };

  this.toCLIString = function () {
    return `
================================================================================
${this.toString()}
--------------------------------------------------------------------------------
The perimeter of the rectangle is ${this.calcPerimeter()}
The area of the rectangle is ${this.calcArea()}
================================================================================
    `;
  };
}

let rectangle = new Rectangle(20, 40);
console.log(rectangle.toCLIString());

rectangle = new Rectangle(50, 30);
console.log(rectangle.toCLIString());
