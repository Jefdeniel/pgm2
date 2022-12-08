class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
    return value;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

  get water() {
    return this.#waterLimit;
  }
}

let coffeeMachine = new CoffeeMachine();
coffeeMachine.setWaterAmount(123);
console.log(coffeeMachine.water);
