// Maak een kopie mbv de spread operator
let fruits = ["Apple", "Orange", "Banana"];
let copiedFruits = [...fruits];
console.log(copiedFruits);

// Combineer arr1 en arr2 tot één array m.b.v. van de spread operator. Log het resultaat hiervan naar de console.

let arr1 = ["A", "B", "C"];
let arr2 = ["X", "Y", "Z"];

arr1 = [...arr1, ...arr2];
console.log(arr1);

// Voeg de inhoud van de newFruits array toe als inhoud van de fruits array. Gebruik vervolgens een for lus om alle elementen uit de fruits array op te lijsten.

let fruites = ["Apple", "Orange", "Banana"];
let newFruites = ["Cherry", "Melon"];

// let fruitesCombo = fruites.concat(newFruites);
// console.log(fruitesCombo);
// for (let)

fruites.push(...newFruites);
console.log(fruites);
for (let fruit of fruites) {
  console.log(fruit);
}

// Combineer beide objecten obj1 en obj2 tot één object bewaard in een variabele employee. Log het resultaat hiervan naar de console.
// const obj1 = { id: 101, name: "John Doe" };
// const obj2 = { age: 28, city: "Ghent" };

// const employee = { ...obj1, ...obj2 };
// console.log(employee);

// Combineer beide objecten obj1 en obj2 tot één object bewaard in een variabele obj1. Log het resultaat hiervan naar de console.
let obj1 = { id: 101, name: "John Doe" };
const obj2 = { age: 28, city: "Ghent" };

obj1 = { ...obj1, ...obj2 }; // Belangrijk was hier dat er niet "const voor mocht staan"
console.log(obj1);

// function combineTwoArrays(arr1, arr2) {
//   return arr1.join(...arr2);
// } --> Dit was fout

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const arr = combineTwoArrays(
  ["Wind", "Rain", "Fire"],
  ["Apple", "Banana", "Grape"]
);
console.log(arr);

function onlyUniques(...args) {
  const mySet = new Set(args);
  const arrWithUniqueValues = [...mySet];
  return arrWithUniqueValues;
}
const uniqueValues = onlyUniques(1, 2, 1, 5, 8, "hello", "world", "hello");
console.log(uniqueValues);

// Maak een functie genaamd combineAllArrays(), deze functie kan een ongelimiteerd aantal arrays ontvangen. Return éen array met de waardes van de doorgegeven arrays.

function combineAllArrays(...args) {
  const array = [];
  for (let el of args) {
    array.push(...el);
  }
  return array;
}
const combinedArray = combineAllArrays(
  [1, 2, 6, 8, "hello"],
  [9, 7, -3, "world", 6, "JavaScript"],
  [3, "React"]
);
console.log(combinedArray);

// Schrijf een functie genaamd add(), deze functie kan een niet-gespecifieerd aantal argumenten ontvangen, bv. add(1,5,6). In de functie log je de hoeveelheid argumenten.

function add(...args) {
  console.log(`The amount of arguments is ${args.length}`);
  let sum = 0;
  for (let el of args) {
    sum += el;
  }
  return sum;
}
const sum = add(1, 5, 6, -3, 54, -28);
console.log(sum);

// Schrijf een functie genaamd: addOnlyNumbers(), deze functie kan een ongelimiteerd aantal argumenten ontvangen, zowel strings als nummers, bv. addOnlyNumbers(1,5,6, 'cat', 'dog', 3). Log de volgende zin Er waren ... argumenten, de som van de getallen is ... wanneer je de functie uitvoert.

function addOnlyNumbers(...args) {
  let sum = 0;
  for (let el of args) {
    if (typeof el === "number") {
      sum += el;
    }
  }
  console.log(sum);
}
const result = addOnlyNumbers(1, 5, 6, "cat", "dog", 3);
console.log(result);
