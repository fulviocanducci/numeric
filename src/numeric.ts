import currency from "currency.js";

export interface LocaleConfig {
  symbol: string;
  decimal: string;
  separator: string;
  precision: number;
}

export const Locale = {
  PT_BR: { symbol: "", decimal: ",", separator: ".", precision: 2 },
  EN_US: { symbol: "", decimal: ".", separator: ",", precision: 2 },
  DE_DE: { symbol: "", decimal: ",", separator: ".", precision: 2 },
  FR_FR: { symbol: "", decimal: ",", separator: " ", precision: 2 },
  ES_ES: { symbol: "", decimal: ",", separator: ".", precision: 2 },
  IT_IT: { symbol: "", decimal: ",", separator: ".", precision: 2 },
  GENERIC: { symbol: "", decimal: "", separator: "", precision: 2 },
} satisfies Record<string, LocaleConfig>;

export class LocaleBuilder {
  private symbol: string = "";
  private decimal: string = ".";
  private separator: string = ",";
  private precision: number = 2;
  constructor() {}
  public setLocale(locale: LocaleConfig) {
    this.symbol = locale.symbol;
    this.decimal = locale.decimal;
    this.separator = locale.separator;
    this.precision = locale.precision;
    return this;
  }
  public setSymbol(symbol: string) {
    this.symbol = symbol;
    return this;
  }
  public setDecimal(decimal: string) {
    this.decimal = decimal;
    return this;
  }
  public setSeparator(separator: string) {
    this.separator = separator;
    return this;
  }
  public setPrecision(precision: number) {
    this.precision = precision;
    return this;
  }
  public build(): LocaleConfig {
    return {
      symbol: this.symbol,
      decimal: this.decimal,
      separator: this.separator,
      precision: this.precision,
    };
  }
}

export class Numeric {
  private value: number;

  constructor(value: number, config: LocaleConfig = Locale.EN_US) {
    this.value = currency(value, config).value;
  }

  set(value: number, config: LocaleConfig = Locale.EN_US) {
    this.value = currency(value, config).value;
    return this;
  }

  format(config: LocaleConfig = Locale.EN_US): string {
    return currency(this.value, config).format(config);
  }

  static create(value: number, config: LocaleConfig = Locale.EN_US): Numeric {
    return new Numeric(value, config);
  }

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

if (typeof window !== "undefined") {
  window.Numeric = Numeric;
  window.Locale = Locale;
  window.LocaleBuilder = LocaleBuilder;
}
