[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/time-field)
[![Build Status](https://travis-ci.org/gatanaso/time-field.svg?branch=master)](https://travis-ci.org/gatanaso/time-field)
[![codecov](https://codecov.io/gh/gatanaso/time-field/branch/master/graph/badge.svg)](https://codecov.io/gh/gatanaso/time-field)

# \<time-field\>

A simple time field Web Component based on Polymer 3.

[Live Demo ↗](https://time-field.firebaseapp.com/demo/)

### Getting started
The `time-field` component is distributed as an npm package.
To start using it, first install it from the command line:
```
npm install --save gatanaso/time-field
```
Once installed, import it into your application:
```
import 'time-field/time-field.js'
```

### Running demos locally

1. Fork the `time-field` repository and clone it locally.
1. Make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed.
1. When in the `time-field` directory, run `npm install` to install the element's dependencies.
1. Run `polymer serve --open`, the browser will automatically open the components demo page.

### Running tests from the command line

When in the `time-field` directory, run:

```
$ wct test --npm -module-resolution=node
```
