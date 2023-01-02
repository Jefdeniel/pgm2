const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "Wat is je naam? ",
  "Waar woon je ",
  "Wat ga je doen met node js? ",
];

collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});
