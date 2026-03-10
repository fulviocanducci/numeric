# Numeric

![npm](https://img.shields.io/npm/v/@fulviocanducci/numeric)
![downloads](https://img.shields.io/npm/dm/@fulviocanducci/numeric)
![license](https://img.shields.io/npm/l/@fulviocanducci/numeric)
![bundle size](https://img.shields.io/bundlephobia/min/@fulviocanducci/numeric)
[![Test](https://github.com/fulviocanducci/numeric/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/fulviocanducci/numeric/actions/workflows/npm-publish.yml)

Lightweight numeric utility library for **JavaScript and TypeScript**.

Numeric provides **safe arithmetic operations**, **locale-aware number parsing**, and **useful numeric helpers** built on top of `currency.js`.

It helps avoid common floating-point issues in JavaScript while keeping the API simple and intuitive.

---

## Features

- Safe decimal arithmetic
- Locale-aware number parsing
- Comparison helpers
- Numeric utilities
- Statistics helpers
- Percentage calculations
- TypeScript support
- Lightweight

---

## Installation

```bash
npm i @fulviocanducci/numeric
```

---

## Usage

```ts
import { Numeric, Locale } from "numeric";
```

---

# Arithmetic

### Sum

```ts
Numeric.sum(10, 20, 30);
// 60
```

### Subtract

```ts
Numeric.subtract(20, 5);
// 15
```

### Multiply

```ts
Numeric.multiply(10, 5);
// 50
```

### Divide

```ts
Numeric.divide(20, 2);
// 10
```

Division by zero throws an error.

---

# Floating Point Safety

JavaScript has floating-point precision issues:

```ts
0.1 + 0.2;
// 0.30000000000000004
```

Numeric solves this:

```ts
Numeric.sum(0.1, 0.2);
// 0.3
```

---

# Parsing Numbers

Numeric can parse numbers using different locale formats.

```ts
Numeric.parse("1.000,25", Locale.PT_BR);
// 1000.25

Numeric.parse("1,000.25", Locale.EN_US);
// 1000.25
```

### Supported Locales

- `PT_BR`
- `EN_US`
- `DE_DE`
- `FR_FR`
- `ES_ES`
- `IT_IT`

---

# Comparison

```ts
Numeric.gt(10, 5); // true
Numeric.gte(10, 10); // true
Numeric.lt(5, 10); // true
Numeric.lte(5, 5); // true
Numeric.eq(10, 10); // true
```

---

# Utilities

### Min

```ts
Numeric.min(10, 5, 20);
// 5
```

### Max

```ts
Numeric.max(10, 5, 20);
// 20
```

### Clamp

Limit a value within a range.

```ts
Numeric.clamp(15, 0, 10);
// 10
```

---

# Rounding

```ts
Numeric.round(10.555, 2);
// 10.56

Numeric.ceil(10.2);
// 11

Numeric.floor(10.9);
// 10

Numeric.abs(-10);
// 10
```

---

# Statistics

### Average

```ts
Numeric.average(10, 20, 30);
// 20
```

---

# Percentage

Calculate a percentage of a value.

```ts
Numeric.percent(200, 10);
// 20
```

Example:

```ts
const price = 200;

const discount = Numeric.percent(price, 10);
const finalPrice = Numeric.subtract(price, discount);

// 180
```

---

# API

### Arithmetic

- `sum(...values)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`

### Comparison

- `gt(a, b)`
- `gte(a, b)`
- `lt(a, b)`
- `lte(a, b)`
- `eq(a, b)`

### Utilities

- `min(...values)`
- `max(...values)`
- `clamp(value, min, max)`
- `round(value, precision)`
- `ceil(value)`
- `floor(value)`
- `abs(value)`

### Statistics

- `average(...values)`

### Financial

- `percent(value, percentage)`

### Parsing

- `parse(value, locale)`

---

# TypeScript

Numeric is written in **TypeScript** and includes full type support.

---

# License

MIT
