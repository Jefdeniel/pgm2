let cats = ["kat1", "kat2", "kat3", "kat4", "kat5"];

let dogs = ["dog1", "dog2", "dog3", "dog4", "dog5"];

let animals = ["animal1", "animal2", "animal3", "animal4", ...cats, ...dogs];

// de drie puntjes (aka de spread operator) haalt de de strings uit de geneste arrays en transformeert ze naar gewone strings zoals de rest
// strings moeten niet uniek zijn

console.log(animals);

// Destructuring arrays de

let [first, , , , fifth] = ["city1", "city2", "city3", "city4", "city5"];

// console.log(cities[1]);
console.log(fifth);

// Searchings arrays with the .includes function

let cities = ["city1", "city2", "city3", "city4", "city5"];

console.log(cities.includes("city2"));
