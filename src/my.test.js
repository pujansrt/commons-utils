// import {Commons} from '../dist/commons-utils';

var Commons = require('../dist/commons-utils.js');

var arr = [1,2,3,4,5];

// console.log(Commons.Utils.easifyArray(arr)[-1]);
// console.log(Commons.Utils.shuffleArray(arr));
// console.log(Commons.Utils.randomArray(4,15));
// console.log(Commons.Utils.removeItemInArray(arr,3));

var arr1 = ['a','b','c',3];

var arr2 = ['a',5,'e',3];

// console.log(Commons.Utils.compactArray([1,2,false,,,'',undefined,null]));

// console.log(Commons.ArrayUtils.flatten([1, [2, 'a', { b: 1, c: [2, 3] } ], [3, 4, [5, 6]]]));
// /[ 1, 2, 'a', { b: 1, c: [ 2, 3 ] }, 3, 4, 5, 6 ]

//console.log(Commons.StringUtils.random(32));
//console.log(Commons.StringUtils.random(32,'numerical'));
//console.log(Commons.StringUtils.isEmpty());
//console.log(Commons.StringUtils.isEmpty(''));
//console.log(Commons.StringUtils.isEmpty(null));
//console.log(Commons.StringUtils.isEmpty(undefined));
//console.log(Commons.StringUtils.isJsonString('{}'));
//console.log(Commons.StringUtils.isJsonString('[]'));
//console.log(Commons.StringUtils.isJsonString('n'));
//console.log(Commons.StringUtils.isString('{}'));


console.log(Commons.BrowserUtils.queryString('http://google.com/idd?name=Pujan+sriv&id=3434343'));

console.log(Commons.StringUtils.formatCurrency('.00'));

