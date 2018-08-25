[![CircleCI](https://circleci.com/gh/luk707/components.svg?style=shield)](https://circleci.com/gh/luk707/components)
[![CLA assistant](https://cla-assistant.io/readme/badge/luk707/components)](https://cla-assistant.io/luk707/components)
[![npm version](https://badge.fury.io/js/%40luk707%2Fcomponents.svg)](https://www.npmjs.com/package/@luk707/components)

# @luk707/components

A library of themable react components.

## Getting started

Install `@luk707/components` into your project:

```
$ npm i @luk707/components -S
```

The library depends on emotion for styles. First; install `emotion` and `emotion-theming` into your project:

```
$ npm i emotion emotion-theming -S
```

Once you have these dependencies installed we need to wrapp your application with a theme. All components of this library must be a child of the `ThemeProvider` in order to work.

Generate a theme using the `createTheme` method exported from the package. To see how this can be configured see the [theming](theming) documentation.

```js
import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "emotion-theming";
import createTheme from "@luk707/components/lib/theme/create-theme";
import App from "./app";

const theme = createTheme();

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
```
