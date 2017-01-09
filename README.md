<img src="https://img.shields.io/travis/pujansrt/commons-utils.svg">
<img src="https://img.shields.io/travis/pujansrt/commons-utils/master.svg?label=linux">
<img src="https://img.shields.io/travis/pujansrt/commons-utils/master.svg?label=windows">


# Commons Utilities

## How to use it

### Using NPM

```
npm install -g commons-utils
var Commons = require('commons-utils');
```

### In browser

```
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Commons Utils Test</title>
  <script src="https://npmcdn.com/commons-utils@latest"></script>
  <script>
    var ArrayUtils = new Commons();
    console.log(ArrayUtils.random(10,20));
  </script>
  </head>
<body>
</body>
</html>
```

## Available Methods for Arrays

```
Commons.ArrayUtils.easify(arr);
Commons.ArrayUtils.shuffle(arr);
Commons.ArrayUtils.random(length, max);
Commons.ArrayUtils.remove(arr, key);
Commons.ArrayUtils.diff(arr1, arr2);
Commons.ArrayUtils.union(arr1, arr2);
Commons.ArrayUtils.intersection(arr1, arr2);
Commons.ArrayUtils.removeDuplicates(arr);
Commons.ArrayUtils.compact(arr);
Commons.ArrayUtils.flatten(arr);
Commons.ArrayUtils.chunk(arr, at);
Commons.ArrayUtils.reverse(arr);
```
