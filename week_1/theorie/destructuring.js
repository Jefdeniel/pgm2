const arr = ["first", "second", "third"];

const first = arr[0];
const second = arr[1];
const third = arr[2];

const [dfirst, dsecond, dthird] = arr;
// Dit is veel sneller dan de vorige method

console.log(dfirst);

// elementen overslaan

const [, , skippedThird, fourth] = arr;
console.log(fourth); // Output: undefined

const [firstElement, ...SecondAndThird] = arr;
console.log(arr);

for (const [index, element] of arr.entries()) {
  console.log(index, element);
}

// Strings are iterable
const [x, ...y] = "abc";
console.log(x, y);

const [f = "firstname", g = f] = ["Jef"];
console.log(f, g);

const [d = "firstname", e = d.toUpperCase()] = ["Jef"];
console.log(d, e);
