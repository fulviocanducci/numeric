import currency from "currency.js";

export const Locale = {
  PT_BR: { decimal: ",", separator: "." },
  EN_US: { decimal: ".", separator: "," },
  DE_DE: { decimal: ",", separator: "." },
  FR_FR: { decimal: ",", separator: " " },
  ES_ES: { decimal: ",", separator: "." },
  IT_IT: { decimal: ",", separator: "." },
} as const;

export type LocaleConfig = (typeof Locale)[keyof typeof Locale];

export class Numeric {
  static sum(...values: number[]): number {
    return currency(values.reduce((a, b) => a + b, 0)).value;
  }

  static subtract(a: number, b: number): number {
    return currency(a).subtract(b).value;
  }

  static multiply(a: number, b: number): number {
    return currency(a).multiply(b).value;
  }

  static divide(a: number, b: number): number {
    if (b === 0) throw new Error("division by zero");
    return currency(a).divide(b).value;
  }

  static parse(value: string, config: LocaleConfig = Locale.EN_US): number {
    return currency(value, config).value;
  }

  static gt(a: number, b: number): boolean {
    return currency(a).value > currency(b).value;
  }

  static gte(a: number, b: number): boolean {
    return currency(a).value >= currency(b).value;
  }

  static lt(a: number, b: number): boolean {
    return currency(a).value < currency(b).value;
  }

  static lte(a: number, b: number): boolean {
    return currency(a).value <= currency(b).value;
  }

  static eq(a: number, b: number): boolean {
    return currency(a).value === currency(b).value;
  }

  static min(...values: number[]): number {
    if (values.length === 0) throw new Error("min requires at least one value");
    return values.reduce((min, value) => {
      return currency(value).value < currency(min).value ? value : min;
    });
  }

  static max(...values: number[]): number {
    if (values.length === 0) throw new Error("max requires at least one value");
    return values.reduce((max, value) => {
      return currency(value).value > currency(max).value ? value : max;
    });
  }

  static clamp(value: number, minValue: number, maxValue: number): number {
    if (currency(value).value < currency(minValue).value) return minValue;
    if (currency(value).value > currency(maxValue).value) return maxValue;
    return value;
  }

  static round(value: number, precision: number = 0): number {
    const factor = Math.pow(10, precision);
    return Math.round(currency(value).value * factor) / factor;
  }

  static ceil(value: number): number {
    return Math.ceil(currency(value).value);
  }

  static floor(value: number): number {
    return Math.floor(currency(value).value);
  }

  static abs(value: number): number {
    return Math.abs(currency(value).value);
  }

  static average(...values: number[]): number {
    if (values.length === 0) throw new Error("average requires at least one value");
    return Numeric.sum(...values) / values.length;
  }

  static percent(value: number, percentage: number): number {
    return Numeric.multiply(value, percentage / 100);
  }
}
