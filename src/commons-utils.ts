export class Commons {
    easifyArray = (arr: any) => {
        const proxy = new Proxy(arr, {
            get(target, name) {
                if (name in target) return Reflect.get(target, name);
                const index = Number(name);
                return Reflect.get(target, target.length + index);
            }
        });
        return proxy;
    }

    shuffleArray = (arr: any) => {
        for (let i = arr.length; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
        return arr;
    }

    randomArray = (length: number, max: number) => {
        let arr = [];
        for (var i = 0; i < length; ++i) arr[i] = i;
        return this.shuffleArray(arr);
    }

    removeItemInArray = (arr: any, key: any) => {
        var index = arr.indexOf(key, 0);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    };

    diffArrays = (arr1:Array<any>, arr2:Array<any>) => {
        var aList = arr1.filter( item => arr2.indexOf(item) < 0);
        var bList = arr2.filter( item => arr1.indexOf(item) < 0);

        var diff = new Set([...aList, ...bList]);
        return Array.from(diff);
    }

    unionArrays = (arr1:Array<any>, arr2:Array<any>) => {
        return [...new Set([...arr1, ...arr2])];
    }

    intersectionArrays = (arr1:Array<any>, arr2:Array<any>) => {
        return Array.from(new Set([...arr1].filter(x => arr2.indexOf(x)>=0)));
    }

    removeDuplicates = (arr:Array<any>) => {
        return Array.from(new Set([...arr]));
    }

    compactArray = (arr:Array<any>) => {
        return arr.filter( item => item);
    }

    flattenArray = (arr:Array<any>)  => {
        let index
        while ( (index = arr.findIndex(el => Array.isArray(el))) > -1 ) {
            arr.splice(index, 1, ...arr[index])
        }
        return arr
    }


}

export var Utils = new Commons();