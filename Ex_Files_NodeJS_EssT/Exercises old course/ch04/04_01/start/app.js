const { inc, dec, getCount } = require("./myModule"); // Eerste mogelijkheid
// import { inc, dec, getCount } from "./myModule"; // Tweede mogelijkheid
// Geen idee waarom de tweede niet werkt?

inc();
inc();
inc();
dec();

console.log(getCount());
