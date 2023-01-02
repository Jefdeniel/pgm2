// process.stdout.write("Hello "); // standaard output, string naar terminal
// process.stdout.write("World \n\n\n");

// Bij console.log wordt er een nieuwe lijn toegevoegd, bij process.stdout.write niet
// Je hebt dus meer controle over de output

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(" > "); // dit is een prompt
};

ask();

// const answers = [];
// process.stdin.on("data", (data) => {
//   //   process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
//   answers.push(data.toString().trim());
//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// });

// process.on("exit", () => {
//   const [name, activity, lang] = answers;
//   console.log(`

//     Thank you for your answers.

//     Go ${activity} ${name} you can write ${lang} code later!!!
//     `);
// }

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  const [name, activity, lang] = answers;
  console.log(`

    Thank you for your answers.

    Go ${activity} ${name} you can write ${lang} code later!!!
    `);
});
