// Object literals are
// function skier(name, sound) {
//   return {
//     name: name,
//     sound: sound,
//     powderYell: function () {
//       let yell = this.sound.toUpperCase();
//       console.log(`${yell} ${yell}`);
//     },
//   };
// }

// console.log(skier("sendy", "woo").powderYell());

function skier(name, sound) {
  return {
    name,
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell} ${yell}`);
    },
  };
}

// console.log(skier("sendy", "woo").powderYell());

// Creating objects with the spread operator and

const daytime = {
  breakfast: "oatmeal",
  lunch: "banaan",
};

const nighttime = "avondeten";

const backpackingMeals = {
  ...daytime,
  nighttime,
};

// console.log(backpackingMeals);

// Destructuring objects

const vacations = {
  destination: "belgium",
  travelers: 2,
  activity: "skiing",
  cost: "so much",
};

function marketing({ destination, activity }) {
  return `come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacations));

const { title, price } = {
  title: "Reuben",
  price: 7,
  description: "a classic",
  ingredients: ["bread", "butter", "dressing", "cheese"],
};

console.log(title);

// For/of loop

for (let letter of "javascript") {
  console.log(letter);
}

let topics = new Map();

//Introducing classes

class vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself() {
    console.log(`i am a ${this.description} with ${this.wheels} weels`);
  }
}

let coolSkiVan = new vehicle("cool van", 4);

console.log(coolSkiVan);
console.log(coolSkiVan.description);

coolSkiVan.describeYourself();

// Inheretance with JS classes

class semiTruck extends vehicle {
  constructor() {
    super("semi truck", 18);
  }
}

// getters and setters

let attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },
  get list() {
    return this._list.join(", ");
  },
};

attendance.addName = "Joanne Star";
attendance.addName = "Jef De Niel";
attendance.addName = "Zebbie";
console.log(attendance.list);

class hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengtInHours() {
    return `${this.calcLength()} hours`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
}

const mtTallac = new hike(10, 2);

console.log(mtTallac.lengtInHours);
