# Numeric

![npm](https://img.shields.io/npm/v/@fulviocanducci/numeric)
![downloads](https://img.shields.io/npm/dm/@fulviocanducci/numeric)
![license](https://img.shields.io/npm/l/@fulviocanducci/numeric)
![bundle size](https://img.shields.io/bundlephobia/min/@fulviocanducci/numeric)
[![Test](https://github.com/fulviocanducci/numeric/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/fulviocanducci/numeric/actions/workflows/npm-publish.yml)

Biblioteca leve para operacoes numericas em JavaScript/TypeScript com suporte a locale, baseada em `currency.js`.

## Instalacao

```bash
npm i @fulviocanducci/numeric
```

## Importacao

```ts
import { Numeric, Locale } from "@fulviocanducci/numeric";
```

Tambem e possivel importar funcoes diretamente:

```ts
import { sum, divide, parse } from "@fulviocanducci/numeric";
```

## Quick Start

```ts
Numeric.sum(0.1, 0.2); // 0.3
Numeric.subtract(20, 5); // 15
Numeric.multiply(10, 5); // 50
Numeric.divide(20, 2); // 10
```

```ts
Numeric.parse("1.000,25", Locale.PT_BR); // 1000.25
Numeric.parse("1,000.25", Locale.EN_US); // 1000.25
```

## API de Instancia

```ts
const value = Numeric.create(1000.5);

value.format(Locale.PT_BR); // "1.000,50"
value.set(1234567.89).format(Locale.EN_US); // "1,234,567.89"
```

Metodos:
- `Numeric.create(value, config?)`
- `new Numeric(value, config?)`
- `set(value, config?)`
- `format(config?)`

## API Estatica

### Aritmetica
- `sum(...values)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`

### Parse
- `parse(value, config?)`

### Comparacao
- `gt(a, b)`
- `gte(a, b)`
- `lt(a, b)`
- `lte(a, b)`
- `eq(a, b)`

### Utilitarios
- `min(...values)`
- `max(...values)`
- `clamp(value, min, max)`
- `round(value, precision?)`
- `ceil(value)`
- `floor(value)`
- `abs(value)`

### Estatistica
- `average(...values)`

### Percentual
- `percent(value, percentage)`

## Locales Disponiveis

- `Locale.PT_BR`
- `Locale.EN_US`
- `Locale.DE_DE`
- `Locale.FR_FR`
- `Locale.ES_ES`
- `Locale.IT_IT`
- `Locale.GENERIC`

Configuracao customizada:

```ts
const customLocale = {
  symbol: "",
  decimal: ",",
  separator: ".",
  precision: 2,
};

Numeric.parse("1.234,56", customLocale); // 1234.56
```

## Erros Esperados

- `Numeric.divide(a, 0)` -> `Error("division by zero")`
- `Numeric.min()` -> erro por lista vazia
- `Numeric.max()` -> erro por lista vazia
- `Numeric.average()` -> erro por lista vazia

## Exportacoes do Pacote

- `Numeric`
- `Locale`
- `sum`, `subtract`, `multiply`, `divide`
- `parse`
- `gt`, `gte`, `lt`, `lte`, `eq`
- `min`, `max`, `clamp`
- `round`, `ceil`, `floor`, `abs`
- `average`, `percent`

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@fulviocanducci/numeric@1.0.4/dist/index.global.js"></script>
```

No browser:
- `window.Numeric`
- `window.Locale`
- `window.LocaleBuilder`

## Licenca

MIT
