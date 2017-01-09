export class Commons {
    easify = (arr: any) => {
        const proxy = new Proxy(arr, {
            get(target, name) {
                if (name in target) return Reflect.get(target, name);
                const index = Number(name);
                return Reflect.get(target, target.length + index);
            }
        });
        return proxy;
    }

    shuffle = (arr: any) => {
        for (let i = arr.length; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
        return arr;
    }

    random = (length: number, max: number) => {
        let arr = [];
        for (var i = 0; i < length; ++i) arr[i] = i;
        return this.shuffle(arr);
    }

    remove = (arr: any, key: any) => {
        var index = arr.indexOf(key, 0);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    };

    diff = (arr1: Array<any>, arr2: Array<any>) => {
        var aList = arr1.filter(item => arr2.indexOf(item) < 0);
        var bList = arr2.filter(item => arr1.indexOf(item) < 0);

        var diff = new Set([...aList, ...bList]);
        return Array.from(diff);
    }

    union = (arr1: Array<any>, arr2: Array<any>) => {
        return [...new Set([...arr1, ...arr2])];
    }

    intersection = (arr1: Array<any>, arr2: Array<any>) => {
        return Array.from(new Set([...arr1].filter(x => arr2.indexOf(x) >= 0)));
    }

    removeDuplicates = (arr: Array<any>) => {
        return Array.from(new Set([...arr]));
    }

    compact = (arr: Array<any>) => {
        return arr.filter(item => item);
    }

    flatten = (arr: Array<any>) => {
        let index
        while ((index = arr.findIndex(el => Array.isArray(el))) > -1) {
            arr.splice(index, 1, ...arr[index])
        }
        return arr
    }

    chunk = (arr: Array<any>, at: number) => {
        let arrb = arr.splice(0, at);
        let result = [];
        result.push(arrb);
        result.push(arr);
        return result;
    }

    reverse = (arr: Array<any>) => {
        var result = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i]);
        }
        return result;
    }

}

export var ArrayUtils = new Commons();