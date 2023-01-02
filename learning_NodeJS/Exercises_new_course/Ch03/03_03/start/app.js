const myModule = require("./myModule");

console.log(myModule);
console.log(myModule.anything);
console.log(myModule.who);
console.log(myModule.count);
console.log(myModule.inc());

const { inc, dec, getCount } = require("./myModule");

inc();
inc(5);

console.log(getCount());
