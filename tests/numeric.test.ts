import { describe, it, expect } from "vitest";
import { Numeric, Locale } from "../src/Numeric";

describe("Numeric", () => {
  it("sum", () => {
    expect(Numeric.sum(10, 20, 30)).toBe(60);
  });

  it("sum with decimals", () => {
    expect(Numeric.sum(10.5, 20.25, 30.75)).toBe(61.5);
  });

  it("sum with decimals 0.1 + 0.2", () => {
    expect(Numeric.sum(0.1, 0.2)).toBe(0.3);
  });

  it("sum negative numbers", () => {
    expect(Numeric.sum(-10, -20)).toBe(-30);
  });

  it("sum positive and negative", () => {
    expect(Numeric.sum(10, -5)).toBe(5);
  });

  it("sum with zero", () => {
    expect(Numeric.sum(0, 10, 20)).toBe(30);
  });

  it("sum large numbers", () => {
    expect(Numeric.sum(1000000, 2000000)).toBe(3000000);
  });

  it("sum many values", () => {
    expect(Numeric.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
  });

  it("subtract", () => {
    expect(Numeric.subtract(20, 5)).toBe(15);
  });

  it("subtract negative numbers", () => {
    expect(Numeric.subtract(-10, -5)).toBe(-5);
  });

  it("subtract result negative", () => {
    expect(Numeric.subtract(5, 10)).toBe(-5);
  });

  it("subtract decimals", () => {
    expect(Numeric.subtract(10.5, 5.25)).toBe(5.25);
  });

  it("multiply", () => {
    expect(Numeric.multiply(10, 5)).toBe(50);
  });

  it("multiply decimals", () => {
    expect(Numeric.multiply(2.5, 2)).toBe(5);
  });

  it("multiply negative", () => {
    expect(Numeric.multiply(-5, 2)).toBe(-10);
  });

  it("multiply two negatives", () => {
    expect(Numeric.multiply(-5, -2)).toBe(10);
  });

  it("multiply by zero", () => {
    expect(Numeric.multiply(100, 0)).toBe(0);
  });

  it("divide", () => {
    expect(Numeric.divide(20, 2)).toBe(10);
  });

  it("divide decimals", () => {
    expect(Numeric.divide(10.5, 2)).toBe(5.25);
  });

  it("divide negative", () => {
    expect(Numeric.divide(-10, 2)).toBe(-5);
  });

  it("divide two negatives", () => {
    expect(Numeric.divide(-10, -2)).toBe(5);
  });

  it("parse pt-br", () => {
    const value = Numeric.parse("1.000,25", Locale.PT_BR);
    expect(value).toBe(1000.25);
  });

  it("parse en-us", () => {
    const value = Numeric.parse("1,000.25", Locale.EN_US);
    expect(value).toBe(1000.25);
  });

  it("parse large pt-br number", () => {
    const value = Numeric.parse("1.234.567,89", Locale.PT_BR);
    expect(value).toBe(1234567.89);
  });

  it("parse large en-us number", () => {
    const value = Numeric.parse("1,234,567.89", Locale.EN_US);
    expect(value).toBe(1234567.89);
  });

  it("parse pt-br simple decimal", () => {
    const value = Numeric.parse("10,25", Locale.PT_BR);
    expect(value).toBe(10.25);
  });

  it("parse en-us simple decimal", () => {
    const value = Numeric.parse("10.25", Locale.EN_US);
    expect(value).toBe(10.25);
  });

  it("parse integer pt-br", () => {
    const value = Numeric.parse("1000", Locale.PT_BR);
    expect(value).toBe(1000);
  });

  it("parse integer en-us", () => {
    const value = Numeric.parse("1000", Locale.EN_US);
    expect(value).toBe(1000);
  });

  it("sum floating point classic bug", () => {
    expect(Numeric.sum(0.1, 0.2, 0.3)).toBe(0.6);
  });

  it("multiply floating point", () => {
    expect(Numeric.multiply(0.1, 0.2)).toBe(0.02);
  });

  it("sum then subtract returns original", () => {
    const value = Numeric.sum(100, 50);
    expect(Numeric.subtract(value, 50)).toBe(100);
  });
});
