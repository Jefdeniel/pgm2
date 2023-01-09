const args = process.argv.slice(2);
const person = {};
let namedArg = "";
args.forEach((val, index) => {
  namedArg = val.split("=");
  person[namedArg[0]] = namedArg[1];
});
console.log(person);
