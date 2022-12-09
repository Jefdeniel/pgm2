// static methods

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.round(Math.hypot(dx, dy)); // Returns the square root of the sum of squares of its arguments => dit is basicly pythagoras
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2)); // 7.0710678118654755
