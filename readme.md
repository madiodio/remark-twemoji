# remark-twemoji

[![prettier][prettier-image]][prettier-url]
[![npm][npm-image]][npm-url]

[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[npm-image]: https://img.shields.io/npm/v/remark-twemoji.svg
[npm-url]: https://npmjs.org/package/remark-twemoji

Remark plugin to replace your emoji by using [twemoji](https://github.com/twitter/twemoji).

## Install

```bash
npm install --dev remark-twemoji
```

## Usage

1.  Basic usage

```js
remark().use(twemoji);
```

2.  Usage with [mdx](https://github.com/mdx-js/mdx) (basically what this plugin has been for):

Somewhere in your webpack config file:

```js
const webpack = require("webpack");
const twemoji = require("remark-twemoji");

...{
  test: /\.md$/,
  exclude: /node_modules/,
  use: [
    "babel-loader",
    {
      loader: "@mdx-js/loader",
      options: {
        mdPlugins: [twemoji]
      }
    }
  ]
},...
```

For more informations, check [this section](https://github.com/mdx-js/mdx#plugins) on the mdx docs.

<!-- ```js
const remark = require('remark');
const twemoji = require('remark-twemoji');

const doc = '🐶 👍';
console.log(remark().use(twemoji).process(doc).contents);
// => 🐶 👍
``` -->

## Inspirations

* [gatsby-remark-twemoji](https://github.com/btnwtn/gatsby-remark-twemoji)
* [remark-emoji](https://github.com/rhysd/remark-emoji/)

## License

MIT
