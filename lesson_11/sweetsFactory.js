const { Candy, Chocolate } = require("./sweets");

class SweetsFactory {
  createSweets(type, name, weight) {
    if (!name || weight <= 0) {
      throw new Error("Invalid parameters for creating sweets");
    }

    switch (type) {
      case "Candy":
        return new Candy(name, weight);
      case "Chocolate":
        return new Chocolate(name, weight);
      default:
        throw new Error(`Unknown sweet type: ${type}`);
    }
  }
}

module.exports = SweetsFactory;
