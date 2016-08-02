# babel-plugin-remove-nonjs

Removes non-js require such as "require('./style.css')" possibly resolved by Webpack.

## Why

For server-side rendering of your components. Assume you wrote a React component with CSS dependency and you want to use it in server-side rendering. In a simple case, you may just want to remove CSS requiring since JavaScript in a process of server-side cannot handle non-JS dependency. In the case, CSS is just OK to be extracted by [extract text plugin](https://github.com/webpack/extract-text-webpack-plugin#usage-example-with-css) and fetch it from html `<head>`.

If you're looking for a more integrated solution, try [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader).

## Example

It simply removes non-JS dependency.

```diff
  require('fs');
  require('./src/blaa');
- require('./src/blaa.css');
- require('./src/blaa.scss');
- require('./src/blaa.less');
- require('./src/yeah.jpg');
```

## Installation

```sh
$ npm install --save-dev babel-plugin-remove-nonjs
```

## License

MIT

## Attribution

This package is originally published by [rickchristie](https://www.npmjs.com/~rickchristie) and  I'm maintaining it.
