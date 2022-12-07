const a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + ", " + j + "]";
  }
}

console.log(a);

const cars = [
  {
    type: "Vovlo",
    stock: 22,
    sold: 18,
  },
];

cars.forEach(function (car) {
  console.log(`${car[0]}: ${car[1]} in stock and ${car[2]} sold.`);
});

emptyArray = [];
console.log(emptyArray.join());

// nummers met zichzelf vermenigvuldigen

const numbers = [1, 2, 3];

const numbersSq = numbers.map((num, index) => {
  return num * num;
});

console.log(numbersSq);

const charArr = Array.from("Mieke");
console.log(charArr);

// sets zijn hoofdlettergevoelig

// const set = new Set[(1, 2, 3, 4, 5, 6, 7, 8, 9)]();
// const arrset = Array.from(set);

// console.log(arrset);

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 3,
};

let arr = Array.from(arrayLike);
console.log(arr); // [ 'Hello', 'World', undefined ]

// Entries

const chairs = ["chair1", "chair2", "chair3", "chair4"];

const itr = chair.entries();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
