const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator', () => {
  // Addition
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  // Subtraction
  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  // Multiplication
  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  // Division
  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  // Edge cases
  test('division by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('add negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('subtract to negative', () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  test('multiply by zero', () => {
    expect(multiply(7, 0)).toBe(0);
  });

  test('divide negative numbers', () => {
    expect(divide(-8, 2)).toBe(-4);
  });
});
