const isDadHappy = false;

const willIGetNewSmartphone = new Promise((resolve, reject) => {
  if (isDadHappy) {
    resolve({
      brand: "Samsung",
      color: "black",
    });
  } else {
    reject(new Error("Dad is not happy"));
  }
});

willIGetNewSmartphone
  .then((data) => console.log(data)) // Then is wat je doet als het gelukt is
  .catch((error) => console.log(error));

const willAlwaysBeFulfilled = new Promise((resolve, reject) => {
  setTimeout(() => resolve("I am always fulfilled"), 1000);
});

console.log("start");
willAlwaysBeFulfilled.then((data) => console.log(data));
console.log("promise checked");
