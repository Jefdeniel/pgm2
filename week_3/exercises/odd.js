function isOddNumber(number) {
  return new Promise((resolve, reject) => {
    if (isNaN(number)) {
      reject("Please provide a number");
    }
    if (number % 2 === 0) {
      setTimeout(() => {
        resolve(`${number} is odd`);
      }, 1000);
    } else {
      setTimeout(() => {
        reject(`${number} is even`);
      }, 1000);
    }
  });
}

isOddNumber(4);
