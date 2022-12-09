function add(a, b) {
  console.trace();
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let x = average(10, 20);

// LIFO principe bij trace

function task(message) {
  let n = 1000000;
  while (n < n) {
    n--;
  }
  console.log(message);
}

console.log("Start script...");
setTimeout(() => task("Downloaded a file"), 1000);

console.log("Done");
