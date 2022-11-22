// Generators laten je toe om functies te pauzeren in het midden van executie om later verder te doen

function* director() {
  yield "three";
  yield "two";
  yield "one";
  yield "action";
}

let countdown = director();

console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next().value);
