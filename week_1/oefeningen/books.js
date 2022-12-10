// Maak een bestand books.js aan.

// Beschrijf een boek via een object literal (Book) met de volgende eigenschappen voor een boek:

// title (string)
// author (string)
// isbnNummer (string)
// tags (array van strings)
// Een boek object bevat daarnaast ook de getInfo() en listTags() functies.

// // De getInfo() functie zal de naam van het boek teruggeven en de auteur. Als we dit loggen krijgen we bijvoorbeeld:

// De Steen der Wijzen - J.K. Rowling

// De listTags() functie zal de tags genummerd weergeven op een nieuwe lijn. Als we dit loggen krijgen we bijvoorbeeld:
// 1. Fantasy
// 2. Harry Potter
// 3. Bestseller
// Maak nu een instantie van een boek en log nu de info én de tags.

// EERSTE MANIER

const book = {
  title: "De Steen der Wijzen",
  author: "J.K. Rowling",
  isbnNummer: "9789022572229",
  tags: ["Fantasy", "Harry Potter", "Bestseller"],
  getInfo: function () {
    return this.title + " - " + this.author;
  },
  listTags: function () {
    for (var i = 0; i < this.tags.length; i++) {
      console.log(i + 1 + ". " + this.tags[i]);
    }
  },
};

console.log(book.getInfo());
console.log(book.listTags());

// TWEEDE MANIER

const books = [
  {
    title: "De Steen der Wijzen",
    author: "J.K. Rowling",
    isbnNummer: "9789022572229",
    tags: ["Fantasy", "Fictie", "Sciencefiction"],
    toString: function () {
      return this.title + " - " + this.author;
    },
    listTags: function () {
      for (var i = 0; i < this.tags.length; i++) {
        console.log(i + 1 + ". " + this.tags[i]);
      }
    },
  },
  {
    title: "De Gevangene van Azkaban",
    author: "J.K. Rowling",
    isbnNummer: "9789022572229",
    tags: ["Fantasy", "Fictie", "Sciencefiction"],
    toString: function () {
      return this.title + " - " + this.author;
    },
    listTags: function () {
      for (var i = 0; i < this.tags.length; i++) {
        console.log(i + 1 + ". " + this.tags[i]);
      }
    },
  },
];

// Dit is super belangrijk en heb ik nog niet onder de knie
console.log(books.map((book) => book.toString()));

const jsonBooks = JSON.stringify(books);
console.log(jsonBooks);

// Mogelijke output: 
Radiant     
Memory      
To the stars
[{"title":"Radiant","author":"Gardner James Alan","isbn":"9780060595265","tags":["Fictie","Sciencefiction"]},{"title":"Memory","author":"","isbn":"9780765309006 ","tags":["Fictie","Sciencefiction"]},{"title":"To the stars","author":"L. Ron Hubbard","isbn":"9789087200299 ","tags":["Fictie","Sciencefiction"]}]
