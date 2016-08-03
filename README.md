# babel-plugin-remove-nonjs [![Build Status](https://travis-ci.org/piglovesyou/babel-plugin-remove-nonjs.svg?branch=master)](https://travis-ci.org/piglovesyou/babel-plugin-remove-nonjs)

Simply removes non-JS `require()` such as `require('./style.css')`, possibly resolved by Webpack with with its ExtractTextPlugin.

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

## Note

Because it also removes valiable declarations like `const style = require('./style.css')`, your code CANNOT depend on a returned value of the module.

If you want scoped CSS, try [css-loader](https://github.com/webpack/css-loader).

If you're looking for a more integrated solution of CSS, try [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader).

## License

MIT

## Attribution

This package is originally published by [rickchristie](https://www.npmjs.com/~rickchristie) and  I'm maintaining it.
