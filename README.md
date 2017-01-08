# Commons Utilities

## How to use it

1. Using NPM

```
npm install -g commons-utils


var Commons = require('../dist/commons-utils.js');

var arr = [1,2,3,4,5];

console.log(Commons.Utils.shuffleArray(arr));
console.log(Commons.Utils.randomArray(4,15));
console.log(Commons.Utils.removeItemInArray(arr,3));
```

2. In browser

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Commons Utils Test</title>
  <script src="https://npmcdn.com/commons-utils@latest"></script>
  </head>
<body>

</body>
</html>
```

## Available Methods for Arrays

```
shuffleArray([1,2,3,4,5]);	//[3,2,4,1,5]

randomArray(6, 10);		//[2, 8, 4, 2, 7, 8]

removeItemInArray([1,2,3,4,5,6,7], 3); //[1,2,4,5,6,7]
```