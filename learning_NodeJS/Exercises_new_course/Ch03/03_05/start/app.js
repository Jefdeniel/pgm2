const events = require("events");

let emitter = new events.EventEmitter();

EventEmitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

EventEmitter.emit("customEvent", "Hello World", "Computer");
EventEmitter.emit("customEvent", "That's pretty cool huh?", "Alex");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    EventEmitter.emit("customEvent", "Goodbye!", "process");
    process.exit();
  }
  EventEmitter.emit("customEvent", input, "terminal");
});
