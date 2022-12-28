// Refactor volgende onderstaande code. De functie ‘job’ zal een promise object moeten returnen en
// zichzelf resolven na 5 seconden. Zorg ervoor dat de data van je promise ‘hello world’ is.

const job = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 5000);
});
