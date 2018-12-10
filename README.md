# refactoring-webcomponents

This is an example of how a large monolithic application can be broken up into more managable web components.

## Installation 

- `nvm use`
- `npm install`

## Requirements

This implementation is based on babel transpiler and compiled with webpack. Optionally TypeScript can be used to build web components. Components are created in React with externally loaded library. This produces a minimal web components build. Development component size is around 9KB.

To run locally type `npm run watch`.

## Setup

Web components are organized under `src`. Each container represents a web components which in turn can be composed of small components. Containers can be loaded into id, tagname or any other dom element.

Components are compiled via webpack into js files which can be included into monolithic applications. 

Additional modules, API features can be installed via npm and loaded into containers. Each container is self contained and may result in module import duplication. For this reason React is included into `index.html` and excluded from build.

Communication between monolithic app and smaller web components can be done via event handlers and props.

## Extensibility

Use this to break up larger application, transition off older frameworks, build extensible components. With inclusion of React, web components could be self contained. Something similar can be done with Angular Web Elements but it is a little more effort and larger bundle sizes https://www.telerik.com/blogs/getting-started-with-angular-elements.