const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.once("ask", () => console.log("started asking questions"));

answerEvents.on("ask", question =>
  console.log(`    question asked: ${question}`)
);
answerEvents.on("answer", answer =>
  console.log(`    question answered: ${answer}`)
);
answerEvents.on("complete", answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});
answerEvents.on("complete", () => process.exit());
