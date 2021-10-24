# title-slug

### Generate a unique slug for a title.

The simple and best way to generate a unique slug for a title, to use it as URL.

## Install

```js
$ npm install title-slug
```

## Usage

```js
const titleSlug = require('title-slug');

titleSlug('hello world');
// hello-world-vup0jf
```

Even the same title will result in different slugs:

```js
const titleSlug = require('title-slug');

titleSlug('hello world');
// hello-world-p8qml5

titleSlug('hello world');
// hello-world-da1v1q

titleSlug('hello world');
// hello-world-rq9p0c

//// THE GENERATED SLUG WILL BE IN LOWER CASE ////

titleSlug('HELLO world');
//hello-world-59dh3j
```

# Donation

If you found this package useful consider supporting me.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/gugocharade)
