<img src="https://img.shields.io/badge/Ecmascript-6%2B-brightgreen.svg">

# commons-utils

## How to use it

1. Using NPM

```
npm install commons-utils
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
easifyArray([1,2,3,4,5])[-1];	//5

shuffleArray([1,2,3,4,5]);	//[3,2,4,1,5]

randomArray(6, 10);		//[2, 8, 4, 2, 7, 8]

removeItemInArray([1,2,3,4,5,6,7], 3); //[1,2,4,5,6,7]
```