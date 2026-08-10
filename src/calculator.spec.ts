import { add, divide, multiply, subtract } from './calculator';

describe('calculator', () => {
  it('adds two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(3, 0)).toBe(0);
  });

  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 2)).toBe(3.5);
  });

  it('refuses to divide by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
  });
});
