// Maak een nieuwe Set met deze data: ['Jan', 'Piet', 'Joris', 'Corneel'], converteer de Set naar een array op twee manieren:

// ingebouwde methode
// destructuring

const mySet = new Set(["Jan", "Piet", "Joris", "Corneel"]);
const myArray = Array.from(mySet); // eerste manier
const myArray2 = [...mySet]; // tweede manier

console.log(myArray);
console.log(myArray2);

// Loop over volgende array: ['Hamilton', 'Verstappen', 'Bottas'], gebruik array destructuring om niet alleen de waarde maar ook de index op te halen van ieder element. Je zal dus moeten loopen over een array iterator. Log voor ieder item de volgende booschap: Naam: ... Podiumplaats: ... met de naam en podiumplaatsingevuld.

const person = [
  {
    firstname: "Hamilton",
    podiumplaats: " ",
  },
  {
    firstname: "Verstappen",
    podiumplaats: " ",
  },
  {
    firstname: "Bottas",
    podiumplaats: " ",
  },
];

for (const [index, element] of person.entries()) {
  console.log(index, element);
}

// Schrijf een functie die steeds de ‘n’-eerste elementen van de array zal teruggeven. Je hebt dus twee argumenten/parameters nodig, een array en ‘n’. Extra: Doe dit op twee verschillende manieren (met dus een andere methode)!

function getFirstElements(array, n) {
  return array.slice(0, n); // Dit is de eerste manier
}

function getFirstElement(array, n) {
  return array.filter((element, index) => index < n); //
}

console.log(getFirstElement([7, 9, 0, -2], 3));

console.log(getFirstElements([7, 9, 0, -2], 3));

// Voorbeeld: getFirstElements([7, 9, 0, -2],3) geeft dit terug: [7, 9, 0].

// Schrijf een functie genaamd renderArray die een array van ‘n’ aantal elementen kan maken met een statische waarde.

function renderArray(length, entry) {
  const arr = new Array(length);
  return arr.fill(entry);
}

console.log(renderArray(4, 11));

// Voorbeeld: renderArray(4, 11) geeft dit terug: [11,11,11,11]

// Controleer met een functie genaamd allVaxxed() of iedere persoon wel gevaccineerd is. Log ‘Het feest kan doorgaan’ wanneer iedereen gevaccineerd is. Wanneer 1 iemand niet geprikt is log je ‘Iedereen moet thuisblijven’.

function allVaxxed(array) {
  const vaccin = array.every((element) => element.vaccin === true);
  if (vaccin) {
    console.log("Het feest kan doorgaan");
  } else {
    console.log("Iedereen moet thuisblijven");
  }
}

const audience = [
  {
    firstname: "Stef",
    vaccin: true,
  },
  {
    firstname: "Joris",
    vaccin: true,
  },
  {
    firstname: "Piet",
    vaccin: false,
  },
];

allVaxxed(audience);

// In een applicatie krijg je als resultaat van een functie de volgende dataset terug:

const cars = [
  {
    model: "C2",
    brand: "Citroën",
    availableColors: ["blue", "gray", "black"],
  },
  {
    model: "La Familia",
    brand: "Ferrari",
    availableColors: ["red", "yellow"],
  },
  {
    model: "Senna",
    brand: "McLaren",
    availableColors: ["orange", "black"],
  },
];

// Maak een functie die alle kleuren in een array zal opslaan. Verander nu je functie zodat enkel unieke waarden zullen worden opgeslagen.

function getColors(array) {
  const colors = array.map((element) => element.availableColors);
  return colors.flat();
}

console.log(getColors(cars));
