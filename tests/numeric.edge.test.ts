import { describe, it, expect } from "vitest";
import { Numeric } from "../src/Numeric";

describe("floating point precision", () => {
  it("0.1 + 0.2", () => {
    expect(Numeric.sum(0.1, 0.2)).toBe(0.3);
  });

  it("0.1 + 0.2 + 0.3", () => {
    expect(Numeric.sum(0.1, 0.2, 0.3)).toBe(0.6);
  });

  it("0.1 * 0.2", () => {
    expect(Numeric.multiply(0.1, 0.2)).toBe(0.02);
  });
});

describe("large numbers", () => {
  it("large sum", () => {
    expect(Numeric.sum(1000000000, 2000000000)).toBe(3000000000);
  });

  it("large multiply", () => {
    expect(Numeric.multiply(1000000, 3000)).toBe(3000000000);
  });
});

describe("error handling", () => {
  it("divide by zero", () => {
    expect(() => Numeric.divide(10, 0)).toThrow();
  });

  it("min without values", () => {
    expect(() => Numeric.min()).toThrow();
  });

  it("max without values", () => {
    expect(() => Numeric.max()).toThrow();
  });
});
