const Calculator = require("./calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("addition works correctly", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(-1, 1)).toBe(0);
  });

  test("subtraction works correctly", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(10, 10)).toBe(0);
    expect(calculator.subtract(-1, -1)).toBe(0);
  });

  test("multiplication works correctly", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.multiply(-3, 4)).toBe(-12);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  test("division works correctly", () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(-10, 2)).toBe(-5);
  });

  test("division by zero", () => {
    expect(calculator.divide(5, 0)).toBe(Infinity);
    // expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
    // expect(calculator.divide(5, 0)).toBeNull();
  });
});
