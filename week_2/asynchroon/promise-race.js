const a = () => new Promise((resolve) => setTimeout(() => resolve("a"), 2000));
const b = () => new Promise((resolve) => setTimeout(() => resolve("b"), 1000));
const c = () => new Promise((resolve) => setTimeout(() => resolve("c"), 1000));
const d = () => new Promise((resolve) => setTimeout(() => resolve("d"), 1000));

console.time("Promise.all");
Promise.race([a(), b(), c(), d()])
  .then((results) => console.log(`done! ${results}`))
  .catch(console.error)
  .finally(() => console.timeEnd("Promise.all"));
