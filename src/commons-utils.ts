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
export class Browsers {    
    queryString = (query:string) => {
        var query_string:any = {};
        //var query = window.location.search.substring(1);
        query = query.split('?')[1];
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]], decodeURIComponent(pair[1]) ];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;  
    }
}

export class Strings {    
    random = (length:number,type:string) => {
        var chars;

        switch (type) {
            case 'alphabetical':
                chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            case 'numerical':
                chars = '0123456789';
                break;
            default:
                chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

        //in case starts with 0 we need to remove it.    
        while(type == 'numerical' && result.startsWith("0")){
            result = chars[Math.floor(Math.random() * chars.length)] + result.substring(1,result.length);
        }    

        return result;
    }

    isEmpty = (a:string) => {
    
        if (!a || a.length === 0 || a === "" || typeof a === "undefined" || !/[^\s]/.test(a) || /^\s*$/.test(a)
            || a.replace(/\s/g, "") === "") {
            return true;
        } else {
            return false;
        }
    }

    isString = (a:string) => {
        if (a === undefined || a === null){
            return false;
        }
        return typeof a === 'string' ||  a instanceof String;
    }

    isJsonString = (a:string) => {
        try {
            JSON.parse(a);
        } catch (e) {
            return false;
        }
        return true;
    }

    capitalize = (string = '') => [...string].map((char, index) => index ? char : char.toUpperCase()).join('');

    removeHtmlTags = (a:string) => {
        return a.replace(/(<([^>]+)>)/ig,"");
    }

    isInteger = (a:any) => {
       return !isNaN(parseFloat(a)) && isFinite(a);
    }

    validateEmail = (email:string) => {
        var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email)) {
            return true;
        }
        return false;
    }

    formatCurrency = (value:string) => {
        var buf = "";
        var sBuf = "";
        var j = 0;
        value = String(value);
 
        if (value.indexOf(".") > 0) {
            buf = value.substring(0, value.indexOf("."));
        } else {
            buf = value;
        }
        if (buf.length%3!=0&&(buf.length/3-1) > 0) {
            sBuf = buf.substring(0, buf.length%3) + ",";
            buf = buf.substring(buf.length%3);
        }
        j = buf.length;
        for (var i = 0; i <(j/3-1); i++) {
            sBuf = sBuf+buf.substring(0, 3) + ",";
            buf = buf.substring(3);
        }
        sBuf = sBuf+buf;
        if (value.indexOf(".") > 0) {
            value = sBuf + value.substring(value.indexOf("."));}
        else {
            value = sBuf;
        }
        return value;
    }
}


export var ArrayUtils = new Commons();
export var BrowserUtils = new Browsers();
export var StringUtils = new Strings();
