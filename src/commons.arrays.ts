import {ObjectsUtils} from "./commons.objects";

export class ArraysUtils {

    static shuffle = (arr: any[]) => {
        for (let i = arr.length; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
        return arr;
    };

    static sample = (arr: any[]) => {
        return arr[Math.floor(Math.random() * arr.length - 1)];
    };

    static uniq = (arr: any[]) => Array.from(new Set([...arr]));

    static compact = (arr: any[]) => arr.filter(item => item);

    static reverse = (arr: any[]) => arr.reverse();

    static union = (arr1: any[], arr2: any[]) => [...new Set([...arr1, ...arr2])];

    static intersection = (arr1: any[], arr2: any[]) => Array.from(new Set([...arr1].filter(x => arr2.indexOf(x) >= 0)));

    static diff = (arr1: any[], arr2: any[]) => {
        const a = new Set(arr1);
        const b = new Set(arr2);
        return Array.from(new Set([...a].filter(x => !b.has(x))));
    };

    static flatten = (array: Array<any>): Array<any> => {
        const flattenedArray: Array<any> = [].concat(...array);
        return flattenedArray.some(Array.isArray) ? ArraysUtils.flatten(flattenedArray) : flattenedArray;
    };

    static last = (arr: any[]) => arr[arr.length - 1];

    static findIndices = (arr: any[], item: any) => {
        const ret: number[] = [];
        for (const i in arr) {
            if (arr[i] === item) ret.push(+i);
        }
        return ret;
    };

    static remove = (key:any, input: any) => {
        if (input instanceof Array) {
            input.splice(input.indexOf(key), 1);
            return input.indexOf(key) < 0 ? input : ArraysUtils.remove(key, input);
        }
        else return ObjectsUtils.remove(key, input);
    }
}