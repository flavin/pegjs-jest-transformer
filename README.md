## Pegjs Transformer for Jest.

Simple module to compile [pegjs](https://pegjs.org/) files for Jest testing.

#### Installation

```
$ npm i -D pegjs-jest-transformer
```

#### Jest configuration

Under transform object, and a mapper to the transformer. Below is an example of mapping `pegjs` files.

```JSON
  "transform": {
    "^.+\\.pegjs?$": "pegjs-jest-transformer"
  }
```
