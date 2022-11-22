let books = new Set();
books.add("Eerste boek");
books.add("tweede boek").add("Oliver Twist");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
books.array.forEach((element) => {});
(function (item) {
  console.log(item);
});

console.log("Eerste boek", books.has("Eerste boek"));
