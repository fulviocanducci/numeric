import { describe, it, expect } from "vitest";
import { Numeric, Locale } from "../src/numeric";

describe("LocaleConfig", () => {
  it("Locale Config PT_BR", () => {
    const PT_BR = Locale.PT_BR;
    expect(PT_BR.symbol).toBe("");
    expect(PT_BR.decimal).toBe(",");
    expect(PT_BR.separator).toBe(".");
    expect(PT_BR.precision).toBe(2);
  });
  it("Locale Config EN_US", () => {
    const EN_US = Locale.EN_US;
    expect(EN_US.symbol).toBe("");
    expect(EN_US.decimal).toBe(".");
    expect(EN_US.separator).toBe(",");
    expect(EN_US.precision).toBe(2);
  });

  it("Locale Config DE_DE", () => {
    const DE_DE = Locale.DE_DE;
    expect(DE_DE.symbol).toBe("");
    expect(DE_DE.decimal).toBe(",");
    expect(DE_DE.separator).toBe(".");
    expect(DE_DE.precision).toBe(2);
  });

  it("Locale Config FR_FR", () => {
    const FR_FR = Locale.FR_FR;
    expect(FR_FR.symbol).toBe("");
    expect(FR_FR.decimal).toBe(",");
    expect(FR_FR.separator).toBe(" ");
    expect(FR_FR.precision).toBe(2);
  });

  it("Locale Config ES_ES", () => {
    const ES_ES = Locale.ES_ES;
    expect(ES_ES.symbol).toBe("");
    expect(ES_ES.decimal).toBe(",");
    expect(ES_ES.separator).toBe(".");
    expect(ES_ES.precision).toBe(2);
  });

  it("Locale Config IT_IT", () => {
    const IT_IT = Locale.IT_IT;
    expect(IT_IT.symbol).toBe("");
    expect(IT_IT.decimal).toBe(",");
    expect(IT_IT.separator).toBe(".");
    expect(IT_IT.precision).toBe(2);
  });

  it("Locale Config GENERIC", () => {
    const GENERIC = Locale.GENERIC;
    expect(GENERIC.symbol).toBe("");
    expect(GENERIC.decimal).toBe("");
    expect(GENERIC.separator).toBe("");
    expect(GENERIC.precision).toBe(2);
  });
});

describe("Numeric Instance Format", () => {
  it("format EN-US -> PT-BR (create)", () => {
    const numeric = Numeric.create(1000.5);
    expect(numeric.format(Locale.PT_BR)).toBe("1.000,50");
  });
  it("format EN-US -> GENERIC", () => {
    const numeric = Numeric.create(1000.5);
    expect(numeric.format(Locale.GENERIC)).toBe("100050");
  });
  it("format EN-US -> PT-BR", () => {
    const numeric = new Numeric(1000.5);
    expect(numeric.format(Locale.PT_BR)).toBe("1.000,50");
  });
  it("format EN-US -> EN-US", () => {
    const numeric = new Numeric(1000.5);
    expect(numeric.format(Locale.EN_US)).toBe("1,000.50");
    numeric.set(1234567.89);
    expect(numeric.format(Locale.EN_US)).toBe("1,234,567.89");
  });
  it("format EN-US -> FR_FR", () => {
    const numeric = new Numeric(1000.5);
    expect(numeric.format(Locale.FR_FR)).toBe("1 000,50");
    numeric.set(1234567.89);
    expect(numeric.format(Locale.FR_FR)).toBe("1 234 567,89");
  });
});

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
