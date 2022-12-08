// JSON is JS object notation maar dan als bestand

const jsonStr = `
  {
    "stock": -1.695,
    "speed": 1.51E-6,
    "isFemale": true, 
    "date": null,
    "names": ["james", "mike", "Stef"],
    "adress": {
      "street": "Industrie",
      "city": "Oudenaarde"
    },
    "date": "15/10/2022"
  }`;

//Omzetten naar js object
const obj = JSON.parse(jsonStr);
console.log(obj);

// Belangrijk: als je het gaat omzetten dan worden de functies niet mee omgezet!
const objWithFunction = {
  start: 5,
  toString: function () {},
};

const jsonNew = JSON.stringify(obj);
const json2 = JSON.stringify(objWithFunction);

console.log(jsonNew); // Output: {"stock":-1.695,"speed":0.00000151,"isFemale":true,"date":"15/10/2022","names":["james","mike","Stef"],"adress":{"street":"Industrie","city":"Oudenaarde"}}
console.log(json2); // Output: {"start":5}
