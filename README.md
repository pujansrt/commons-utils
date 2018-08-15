<img src="https://img.shields.io/travis/pujansrt/commons-utils.svg">
<img src="https://img.shields.io/travis/pujansrt/commons-utils/master.svg?label=linux">
<img src="https://img.shields.io/travis/pujansrt/commons-utils/master.svg?label=windows">


# Commons Utilities

## Common Available Methods

```
clone;
remove;
shuffle;
sample;
uniq;
compact;
reverse;
union;
intersection;
diff;
flatten;
last;
findIndices;
camelCase;
pascalCase;
titleCase;
toggleCase;
swapCase;
dotCase;
random;
guid;
formatCurrency;
isEmpty;
isInteger;
isJsonString;
isString;
removeHtmlTags;
extractURLs;
extractPhones;
extractEmails;
extractPercent;
extractNumbers;
extractUSCurrencyAndNumbers;
extractHyphenated;
extractTime;
extractDotted;
extractQuoted;
replaceAt;
validateEmail;
validateUrl;
validateImage;
validateUSA_SSN;
validateDate;
validateCreditCard;
isValidCreditCard;
validateCitizenId;
```

## validateCitizenId

```json
validateCitizenId()
```

### Countries that are supported 

```
Brazil i.e. "BR"
Croatia "HR"
Ireland i.e. "IE"
San Marino ie "SM"
Thailand i.e. "TH"
Turkey i.e. "TR":
```


## How to use it

### Install

```py
npm install -S commons-utils
```

### Code Sample

```js
const CommonsUtils = require('commons-utils');

console.log(CommonsUtils.dotCase('userName')); //user.name
```


