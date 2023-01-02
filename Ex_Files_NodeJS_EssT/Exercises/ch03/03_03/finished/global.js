console.log(__dirname);
console.log(__filename);
//
//  Dit is een globale object

const path = require("path");
console.log(`the file name is ${path.basename(__filename)}`);

console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv); // dit brengt een array met de paden van alle commands die je hebt ingegeven tot nu toe in de terminal

const [, , firstName, lastName] = process.argv;

console.log(`Your name is ${firstName} ${lastName}`);

// node global --user ned -greeting "hidey"
// je kan dit ook ingeven in de terminal

const grab = (flag) => {
  let indexafterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexafterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
