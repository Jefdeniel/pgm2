// Using the strign.repeat function

let yell = "woo!";

let party = yell.repeat(20);

console.log(party);

let cat = {
  meow(times) {
    console.log("meow".repeat(times));
  },
  purr(times) {
    console.log("prrr".repeat(times));
  },
  snore(times) {
    console.log("zzzz".repeat(times));
  },
};

cat.meow(3);
cat.purr(5);
cat.snore(8);

// Setting default function parameters 

 