//Herschrijf onderstaande code met destructering zodat je niet lijn-per-lijn iedere variabele moet aanmaken.

let item = ["Egg", 0.25, 12];

const [name, price, quantity] = item;
console.log(`name: ${name} | price: ${price} | quantity: ${quantity}`);
