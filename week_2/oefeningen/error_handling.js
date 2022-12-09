// // Voer de onderstaande code uit, lees de foutmelding en los de syntax error vervolgens op..

// let readyToLaunch = false;
// let fuel = 17000;

// if (fuel >= 20000) {
//   console.log("Fuel level cleared.");
//   readyToLaunch = true;
// } else {
//   console.log("WARNING: Insufficient fuel!");
//   readyToLaunch = false;
// }

// // Voer de onderstaande code uit, lees de foutmelding en los de syntax errors vervolgens op..

// let launchReady = false;
// let crewStatus = true;
// let computerStatus = "green";

// if (crewStatus && computerStatus === "green") {
//   console.log("Crew & computer cleared.");
//   launchReady = true;
// } else {
//   console.log("WARNING: Crew or computer not ready!");
//   launchReady = false;
// }

// if (launchReady) {
//   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
//   console.log("Fed parrot...");
//   console.log("Ignition...");
//   console.log("Liftoff!");
// } else {
//   console.log("Launch scrubbed.");
// }

// Voer de onderstaande code uit, lees de foutmelding en los de runtime errors vervolgens op..

// let launchReady = false;
// let fuelLevel = 17000;

// if (fuelLevel >= 20000) {
//   console.log("Fuel level cleared.");
//   launchReady = true;
// } else {
//   console.log("WARNING: Insufficient fuel!");
//   launchReady = false;
// }

// Voer de onderstaande code uit, lees de foutmelding en los de runtime errors vervolgens op..

// let launchReady = false;
// let fuelLevel = 27000;

// if (fuelLevel >= 20000) {
//   console.log("Fuel level cleared.");
//   launchReady = true;
// } else {
//   console.log("WARNING: Insufficient fuel!");
//   launchReady = false;
// }

// if (launchReady) {
//   console.log("10, 9, 8...");
//   console.log("Fed parrot...");
//   console.log("6, 5, 4...");
//   console.log("Ignition...");
//   console.log("3, 2, 1...");
//   console.log("Liftoff!");
// } else {
//   console.log("Launch scrubbed.");
// }

// De syntax en runtime errors lijken opgelost. Maar er zitten nog heel moeilijke bugs in, namelijk logische bugs. De code lijkt te werken maar je krijgt niet het gewenste resultaat.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = "green";

if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
}

if (crewStatus && computerStatus === "green") {
  console.log("Crew & computer cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Crew or computer not ready!");
  launchReady = false;
}

if (launchReady) {
  console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
  console.log("Liftoff!");
} else {
  console.log("Launch scrubbed.");
}
