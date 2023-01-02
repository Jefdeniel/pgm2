const events = require("events");

const myEmitter = new events.EventEmitter();

myEmitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// myEmitter.emit("customEvent", "Hello World", "computer");
// myEmitter.emit("customEvent", "That's pretty cool huh?", "jef");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    myEmitter.emit("customEvent", "Goodbye!", "process");
    process.exit();
  }
  myEmitter.emit("customEvent", input, "terminal");
});
