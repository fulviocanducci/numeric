import { describe, it, expect } from "vitest";
import { Numeric } from "../src/numeric";

describe("Numeric comparison", () => {
  it("gt", () => {
    expect(Numeric.gt(10, 5)).toBe(true);
  });

  it("gte equal", () => {
    expect(Numeric.gte(10, 10)).toBe(true);
  });

  it("lt", () => {
    expect(Numeric.lt(5, 10)).toBe(true);
  });

  it("lte equal", () => {
    expect(Numeric.lte(5, 5)).toBe(true);
  });

  it("eq", () => {
    expect(Numeric.eq(10, 10)).toBe(true);
  });
});

describe("Numeric min max", () => {
  it("min", () => {
    expect(Numeric.min(10, 5, 20)).toBe(5);
  });

  it("max", () => {
    expect(Numeric.max(10, 5, 20)).toBe(20);
  });
});

describe("Numeric clamp", () => {
  it("clamp inside", () => {
    expect(Numeric.clamp(5, 0, 10)).toBe(5);
  });

  it("clamp below", () => {
    expect(Numeric.clamp(-5, 0, 10)).toBe(0);
  });

  it("clamp above", () => {
    expect(Numeric.clamp(15, 0, 10)).toBe(10);
  });
});

describe("Numeric rounding", () => {
  it("round", () => {
    expect(Numeric.round(10.555, 2)).toBe(10.56);
  });

  it("ceil", () => {
    expect(Numeric.ceil(10.2)).toBe(11);
  });

  it("floor", () => {
    expect(Numeric.floor(10.9)).toBe(10);
  });
});

describe("Numeric abs", () => {
  it("abs negative", () => {
    expect(Numeric.abs(-10)).toBe(10);
  });

  it("abs positive", () => {
    expect(Numeric.abs(10)).toBe(10);
  });
});

describe("Numeric statistics", () => {
  it("average", () => {
    expect(Numeric.average(10, 20, 30)).toBe(20);
  });

  it("average with decimals", () => {
    expect(Numeric.average(10.5, 20.5)).toBe(15.5);
  });

  it("average single value", () => {
    expect(Numeric.average(10)).toBe(10);
  });
});

describe("Numeric percent", () => {
  it("percent basic", () => {
    expect(Numeric.percent(200, 10)).toBe(20);
  });

  it("percent decimal", () => {
    expect(Numeric.percent(150, 12.5)).toBe(18.75);
  });

  it("percent zero", () => {
    expect(Numeric.percent(200, 0)).toBe(0);
  });
});
