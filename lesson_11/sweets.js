class Sweets {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

class Candy extends Sweets {}
class Chocolate extends Sweets {}

module.exports = { Sweets, Candy, Chocolate };
