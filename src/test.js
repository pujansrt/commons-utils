// import {Commons} from '../dist/commons-utils';

var Commons = require('../dist/commons-utils.js');

var arr = [1,2,3,4,5];

console.log(Commons.Utils.shuffleArray(arr));
console.log(Commons.Utils.randomArray(4,15));
console.log(Commons.Utils.removeItemInArray(arr,3));