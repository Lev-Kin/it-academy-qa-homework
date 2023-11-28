class FilledCandy {
  constructor(candy, filling) {
    this._candy = candy;
    this._filling = filling;
  }

  get name() {
    return `${this._candy.name} with ${this._filling}`;
  }

  get weight() {
    return this._candy.weight;
  }
}

module.exports = FilledCandy;
