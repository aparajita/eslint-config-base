# @aparajita/eslint-config-base

This config for JavaScript and TypeScript contains an extremely complete set of rules that maximizes type safety and automatic formatting of source code. It was created to make sharing between my projects much easier, and to have a single source of truth for my eslint config. You may find it useful as well.

## Installation

```shell
% pnpm add -D @aparajita/eslint-config-base
```

This config has several peer dependencies which you may need to install as devDependencies as well:

```
@typescript-eslint/eslint-plugin: >=5.29.0,
eslint: >=8,
eslint-config-standard: >=17.0.0,
eslint-plugin-import: >=2.26.0,
eslint-plugin-n: >=15.2.3,
eslint-plugin-promise: >=6.0.0,
typescript: >=4.7.4
```

## Usage

In order to use this config, add it to the `extends` clause of your eslint config.

```js
module.exports = {
  extends: [
    '@aparajita/base'
  ]
}
```

In the root eslint config of your project, you have to tell the TypeScript eslint plugin where the root tsconfig directory is.

```js
module.exports = {
  extends: [
    '@aparajita/base'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname
  }
}
```

## Coding style

In terms of coding style, this config follows [standard js](https://standardjs.com/rules.html) with the exception of disallowing a space after function name declarations ([space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren.html)).

## Rule philosophy

The TypeScript rules in this config are extremely strict, to prevent casual subverting of the type system. TypeScript and the [@typescript-eslint rules](https://typescript-eslint.io/rules/) are trying to prevent us from introducing subtle runtime errors, so my philosophy is that you should have to explicitly disable such rules, because that makes you think twice about whether it’s really safe to do so.

You can of course override any of the rules in this config to suit your own tastes.
