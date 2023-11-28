class Gift {
  constructor() {
    this._sweets = [];
  }

  add(sweet) {
    if (sweet && sweet.weight > 0) {
      this._sweets.push(sweet);
    } else {
      throw new Error("Invalid sweet object");
    }
  }

  get totalWeight() {
    return this._sweets.reduce((sum, sweet) => sum + sweet.weight, 0);
  }

  sortByWeight() {
    this._sweets.sort((a, b) => a.weight - b.weight);
  }
  
  findByWeightRange(min, max) {
    return this._sweets.filter(
      (sweets) => sweets.weight >= min && sweets.weight <= max
    );
  }
}

module.exports = Gift;
