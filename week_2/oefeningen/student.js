// Beschrijf studenten in een JSON String met de volgende eigenschappen voor een student:

// voornaam (string)
// familienaam (string)
// studentenNummer (string)
// cursussen (array)
// cursusnaam (string)
// studiepunten (number)
// contacturen (number)
// Valideer deze JSON String via JSONLint(opens new window).

// Converteer deze JSON String naar een JavaScript object via de JSON.parse() methode. Log de output van dit object naar de console.

const jsonStr = `
  {
    "voornaam": "Stef",
    "familienaam": "Van den Broeck",
    "studentenNummer": "s123456",
    "cursussen": [
      {
        "cursusnaam": "Webtechnologie",
        "studiepunten": 5,
        "contacturen": 2

      },
      { 
        "cursusnaam": "Webtechnologie",
        "studiepunten": 5,
        "contacturen": 2
      }
    ]
  }`;

obj = JSON.parse(jsonStr);
console.log(obj);
