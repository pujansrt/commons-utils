class ArraysUtils {

    static clone = (input: any) => {
        if (input instanceof Array) {
            return [...input];
        }
        return {...input};
    };

    static shuffle = (arr: any[]) => {
        for (let i = arr.length; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
        return arr;
    };

    static sample = (arr: any[]) => {
        return arr[Math.floor(Math.random() * (arr.length - 1))];
    };

    static uniq = (arr: any[]) => Array.from(new Set([...arr]));

    // Removes null, empty, undefined, falsy values from list
    static compact = (arr: any[]) => arr.filter(Boolean);

    static reverse = (arr: any[]) => arr.reverse();

    static union = (arr1: any[], arr2: any[]) => [...new Set([...arr1, ...arr2])];

    static intersection = (arr1: any[], arr2: any[]) => Array.from(new Set([...arr1].filter(x => arr2.indexOf(x) >= 0)));

    static diff = (arr1: any[], arr2: any[]) => {
        const a = new Set(arr1);
        const b = new Set(arr2);
        return Array.from(new Set([...a].filter(x => !b.has(x))));
    };

    static flattenDeep = (array: Array<any>): Array<any> => {
        const flattenedArray: Array<any> = [].concat(...array);
        return flattenedArray.some(Array.isArray) ? ArraysUtils.flattenDeep(flattenedArray) : flattenedArray;
    };

    static flattenByDepth = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? ArraysUtils.flattenByDepth(v, depth - 1) : v), []);

    static last = (arr: any[]) => arr[arr.length - 1];

    static findIndices = (arr: any[], item: any) => {
        const ret: number[] = [];
        for (const i in arr) {
            if (arr[i] === item) ret.push(+i);
        }
        return ret;
    };

    static remove = (key: any, input: any) => {
        if (input instanceof Array) {
            input.splice(input.indexOf(key), 1);
            return input.indexOf(key) < 0 ? input : ArraysUtils.remove(key, input);
        }
        else return ObjectsUtils.remove(key, input);
    };

    /**
     * chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
     *
     * @param arr
     * @param size
     */
    static chunk = (arr, size) => Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

    /**
     * nthElement(['a', 'b', 'c'], 1); // 'b'
     * nthElement(['a', 'b', 'b'], -3); // 'a'
     *
     * @param arr
     * @param n
     */
    static nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
}

class ObjectsUtils {
    static remove = (key, {[key]: remove, ...rest}) => rest;

    static isEmpty = (obj: Object = {}) => Object.getOwnPropertyNames(obj).length === 0;

    static safeparse = (item, defaultReturn?: any) => {                                                                                               // safe json parsing defaultReturn can be empty array or empty object ([], {})
        try {
            return JSON.parse(item);
        } catch (e) {
            return defaultReturn;
        }
    };

    /**
     * is(Array, [1]); // true
     * is(ArrayBuffer, new ArrayBuffer()); // true
     * is(Map, new Map()); // true
     * is(RegExp, /./g); // true
     * is(Set, new Set()); // true
     * is(WeakMap, new WeakMap()); // true
     * is(WeakSet, new WeakSet()); // true
     * is(String, ''); // true
     * is(String, new String('')); // true
     * is(Number, 1); // true
     * is(Number, new Number(1)); // true
     * is(Boolean, true); // true
     * is(Boolean, new Boolean(true)); // true
     *
     * @param type
     * @param val
     */
    static is = (type, val) => ![, null].includes(val) && val.constructor === type;

    static isObject = (obj) => !!obj && obj.constructor === {}.constructor;

    static isFunction = val => typeof val === 'function';

    static objectType1 = (obj) => {
        try {
            let op = Object.prototype.toString.call(obj);
            return op.replace(/\[|object|\]| /g, '');
        } catch {
            return undefined;
        }
    };

    /**
     * isNil(null); // true
     * isNil(undefined); // true
     *
     * @param val
     */
    static isNil = val => val === undefined || val === null;

    /**
     * isPrimitive(null); // true
     * isPrimitive(50); // true
     * isPrimitive('Hello!'); // true
     * isPrimitive(false); // true
     * isPrimitive(Symbol()); // true
     * isPrimitive([]); // false
     *
     * @param val
     */
    static isPrimitive = val => !['object', 'function'].includes(typeof val) || val === null;

    static objectType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

    /**
     * lowercaseKeys({NAME: 'Pujan}) --> {name: 'Pujan}
     * @param obj
     */
    static lowercaseKeys = obj =>
        Object.keys(obj).reduce((acc, key) => {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {});

    // static get = (from, ...selectors) => [...selectors].map(s => s.replace(/\[([^\[\]]*)\]/g, '.$1.').split('.').filter(t => t !== '').reduce((prev, cur) => prev && prev[cur], from));
    // static atob = str => new Buffer(str, 'base64').toString('binary'); // atob('Zm9vYmFy'); // 'foobar'
    // static btoa = str => new Buffer(str, 'binary').toString('base64');
}

class StringsUtils {

    /**
     * hello javascript => helloJavascript
     *
     * @param text
     */
    static camelCase = (text: string) => text.replace(/\s(.)/g, ($1) => $1.toUpperCase()).replace(/\s/g, '');

    /**
     * hello javascript => HelloJavascript
     *
     * @param text
     */
    static pascalCase = (text: string) => text.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/\s/g, '');

    /**
     * hello javascript => Hello Javascript
     *
     * @param string
     */
    static titleCase = (text: any) => text.split(' ').map((w) => w.charAt(0).toUpperCase() + w.substr(1, w.length - 1)).join(' ');

    /**
     * Hello => hELLO
     *
     * @param text
     */
    static toggleCase = (text: any) => [...text].map((c) => c.charCodeAt(0) <= 90 ? c.toLowerCase() : c.toUpperCase()).join('');

    static swapCase = (text: string) => StringsUtils.toggleCase(text);

    /**
     * 1. space is replaced with dot
     * 2. Capitalize letter is replaced with dot and small letter of that letter
     * 3. multiple dots can not come together
     * 4. lowercase everything
     *
     * @param text
     */
    static dotCase = (text: string) => {
        text = text.replace(/\s/g, '.');
        text = [...text].map((w) => w.charCodeAt(0) <= 90 ? '.' + w.toLowerCase() : w).join('').replace(/\.+/g, '.');
        return text;
    };

    /**
     * toKebabCase('camelCase'); // 'camel-case'
     * toKebabCase('some text'); // 'some-text'
     *
     * @param text
     */
    static kebabCase = (text) => text && text
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');

    /**
     * toSnakeCase('camelCase'); // 'camel_case'
     * toSnakeCase('some text'); // 'some_text'
     *
     * @param text
     */
    static snakeCase = (text) => text && text
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');

    /**
     * truncateString('boomerang', 7); // 'boom...'
     *
     * @param str
     * @param num
     */
    static truncateString = (str, num) => str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

    static random = {
        default: (min: number = 0, max: number = 100): number => {
            if (min >= 0 && max <= 1) return +(Math.random() * (0.00 - 1.00) + 1.00).toFixed(2);
            return ~~(Math.random() * (max - min + 1)) + min;
        },
        alphabetical: (length: number): string => {
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return Array.from({length}).map(i => chars[~~(Math.random() * chars.length)]).join("");
        },
        numerical: (length: number): number => {
            const chars = '0123456789';
            let result: string = '';
            for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

            while (result.startsWith("0")) {
                result = chars[Math.floor(Math.random() * chars.length)] + result.substring(1, result.length);
            }
            return +result;
        },
        alphanumeric: (length: number): string => {
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
            return Array.from({length}).map(i => chars[~~(Math.random() * chars.length)]).join("");
        },
        color: (text: string, s: number = 60, l: number = 70) => {
            if (!text) return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);

            let hash = 0;
            for (let i = 0; i < text.length; i++) {
                hash = text.charCodeAt(i) + ((hash << 5) - hash);
            }

            const h = hash % 360;
            return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
        }
    };

    static isEmpty1 = (a: any) => {
        if (!isString(a)) return ObjectsUtils.isEmpty(a);

        if (!a || a.length === 0 || a === "" || typeof a === "undefined" || !/[^\s]/.test(a) || /^\s*$/.test(a) || a.replace(/\s/g, "") === "") {
            return true;
        }
        return false;
    };

    static isEmpty = val => val == null || !(Object.keys(val) || val).length;

    static isString = (a: any) => {
        if (a === undefined || a === null) {
            return false;
        }
        return typeof a === 'string' || a instanceof String;
    };

    static isJsonString = (a: string) => {
        if (!StringsUtils.isString(a)) return false;

        try {
            JSON.parse(a);
        } catch (e) {
            return false;
        }
        return true;
    };

    static isInteger = (number) => (number ^ 0) === number;

    static isNumber = (n: any) => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

    static size1 = (item: any) => {
        if (item === null) return 0;

        if (Array.isArray(item)) return item.length;

        return Object.keys(item).length;
    };

    static size = val =>
        Array.isArray(val)
            ? val.length
            : val && typeof val === 'object'
            ? val.size || val.length || Object.keys(val).length
            : typeof val === 'string'
                ? new Blob([val]).size
                : 0;

    static queryStringToObject = (query = window.location.search.substring(1)) => {
        if (query.startsWith('?')) query = query.substr(1);
        let query_string = {};
        const vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    };

    static removeHtmlTags = (a: string) => {
        return a.replace(/(<([^>]+)>)/ig, "");
    };

    static escapeHTML = str =>
        str.replace(
            /[&<>'"]/g,
            tag =>
                ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    "'": '&#39;',
                    '"': '&quot;'
                }[tag] || tag)
        );

    static unescapeHTML = str =>
        str.replace(
            /&amp;|&lt;|&gt;|&#39;|&quot;/g,
            tag =>
                ({
                    '&amp;': '&',
                    '&lt;': '<',
                    '&gt;': '>',
                    '&#39;': "'",
                    '&quot;': '"'
                }[tag] || tag)
        );

    static slugify = (text) => {
        const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
        const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
        const p = new RegExp(a.split('').join('|'), 'g');
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(p, c => b.charAt(a.indexOf(c)))
            .replace(/&/g, '-and-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    static formatCurrency = (value: number) => {
        return parseFloat('' + value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };

    /**
     * toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
     * toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
     * toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
     * toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
     * toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
     *
     * @param n
     * @param curr
     * @param LanguageFormat
     */
    static toCurrency = (n, curr, LanguageFormat = undefined) => Intl.NumberFormat(LanguageFormat, {
        style: 'currency',
        currency: curr
    }).format(n);

    static guid = (hyphen: boolean = false) => {
        const hyphenChar = hyphen ? '-' : '';

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + hyphenChar + s4() + hyphenChar + s4() + hyphenChar + s4() + hyphenChar + s4() + s4() + s4();
    };

    static extractURLs = (text: string): string[] => {                                                      // Extract URL's
        return text.match(/(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/gi) || [];
    };

    static extractPhones = (text: string): string[] => {                                                    // Extract phone numbers
        return text.match(/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/gi) || [];
    };

    static extractEmails = (text: string): string[] => {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) || [];
    };

    static extractPercent = (text): string[] => {
        return text.match(/\d+\%/gi) || [];
    };

    static extractNumbers = (text: string): string[] => {                                                                                   // Extract numbers from string
        return text.match(/\d+/gi) || [];
    };

    static extractUSCurrencyAndNumbers = (text): string[] => {
        return text.match(/\$?([\d,\.]+)\d(?!%)(?!:)/gi) || [];
    };

    static extractHyphenated = (text: string): string[] => {                                                                                // Extract hyphenated text
        return text.match(/([a-zA-Z0-9]+-){1,}[a-zA-Z0-9]+/gi) || [];
    };

    static extractTime = (text: string): string[] => {                                                                                      // Extract time
        return text.match(/([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/gi) || [];
    };

    static extractDotted = (text: string): string[] => {                                                                                    // E.A.D.P., Washington D.C. or L.A.
        return text.match(/(?:[a-zA-Z]\.){1,}[a-zA-Z]?/gi) || [];
    };

    static extractQuoted = (text: string): string[] => {                                                                                    // Is quoted?
        return text.match(/"([^"]+)"/g) || [];
    };

    static isLowerCase = str => str === str.toLowerCase();
    static isUpperCase = str => str === str.toUpperCase();

    static words = (text: string, pattern = /[^a-zA-Z-]+/) => text.split(pattern).filter(Boolean);

    /**
     * mask('1234567890',3,'*') --> *******890
     *
     * @param cc
     * @param num
     * @param mask
     */
    static mask = (cc, num = 4, mask = '*') => ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

    /**
     * pad('cat', 8); // '  cat   '
     pad(String(42), 6, '0'); // '004200'
     pad('foobar', 3); // 'foobar'

     * @param str
     * @param length
     * @param char
     */
    static pad = (str, length, char = ' ') => str.padStart((str.length + length) / 2, char).padEnd(length, char);

    /**
     * removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
     *
     * @param str
     */
    static removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');

    static hexToRGB = hex => {
        let alpha = false,
            h = hex.slice(hex.startsWith('#') ? 1 : 0);
        if (h.length === 3) h = [...h].map(x => x + x).join('');
        else if (h.length === 8) alpha = true;
        h = parseInt(h, 16);
        return (
            'rgb' +
            (alpha ? 'a' : '') +
            '(' +
            (h >>> (alpha ? 24 : 16)) +
            ', ' +
            ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
            ', ' +
            ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
            (alpha ? `, ${h & 0x000000ff}` : '') +
            ')'
        );
    };

    static RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

    /**
     * Replace text at particular index with char;
     *
     * @param text
     * @param char
     * @param index
     */
    static replaceAt = (text: string, char: string, index: number): string => {
        if (index < 0) return text;
        return text.substr(0, index) + char + text.substr(index + 1);
    };

    /**
     * Remove text at index
     *
     * @param text
     * @param index
     */
    static removeAt = (text: string, index: number): string => {
        if (index < 0) return text;
        return text.substr(0, index) + text.substr(index + 1);
    };
}

class MathsUtils {
    static average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

    /**
     * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
     *
     * @param arr
     * @param fn
     */
    static averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length;

    /**
     * gcd(12,18) => 6
     *
     * @param arr
     */
    static gcd = (...arr) => {
        const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
        return [...arr].reduce((a, b) => _gcd(a, b));
    };

    /**
     * lcm(12, 5); --> 60
     * lcm(...[1,2,3,4]) --> 12
     *
     * @param arr
     */
    static lcm = (...arr) => {
        const gcd = (x, y) => (!y ? x : gcd(y, x % y));
        const _lcm = (x, y) => (x * y) / gcd(x, y);
        return [...arr].reduce((a, b) => _lcm(a, b));
    };

    static isPrime = num => {
        const boundary = Math.floor(Math.sqrt(num));
        for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
        return num >= 2;
    };

    static primes = num => {
        let arr = Array.from({length: num - 1}).map((x, i) => i + 2),
            sqroot = Math.floor(Math.sqrt(num)),
            numsTillSqroot = Array.from({length: sqroot - 1}).map((x, i) => i + 2);
        numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
        return arr;
    };

    static isEven = num => num % 2 === 0;

    static isOdd = num => num % 2 === 1;

    /**
     * maxBy([{a:5},{a:6}], o => o.a); --> 6
     *
     * @param arr
     * @param fn
     */
    static maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
    static minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));

    /**
     * sumBy([{ a: 4 }, { a: 2 }], o => o.a); // 6
     *
     * @param arr
     * @param fn
     */
    static sumBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);
    /**
     * Middle of sorted array;
     *
     * @param arr
     */
    static median = arr => {
        const mid = Math.floor(arr.length / 2), nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };

    /**
     * percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55
     *
     * @param arr
     * @param val
     */
    static percentile = (arr, val) => (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;

    /**
     * toSafeInteger('3.2'); // 3
     * toSafeInteger(Infinity); // 9007199254740991
     *
     * @param num
     */
    static toSafeInteger = num => Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
}


class ValidationsUtils {

    static isValidEmail = (email: string) => {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email)) {
            return true;
        }
        return false;
    };

    static isValidUrl = (value: string) => {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        if (regexp.test(value.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    };

    static isValidImage = (value: string) => {
        const exp = /.*\.(gif)|(jpeg)|(jpg)|(png)$/;
        if (value != "") {
            if (value.toLowerCase().match(exp)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
        //return false;
    };

    static isValidUSA_SSN(value: string) {
        value = value.toLowerCase();
        var tmp = false;
        var re = /^([0-6]\d{2}|7[0-6]\d|77[0-2])([ \-]?)(\d{2})\2(\d{4})$/;
        if (!re.test(value)) {
            tmp = true;
        }
        var temp = value;
        if (value.indexOf("-") != -1) {
            temp = (value.split("-")).join("");
        }
        if (value.indexOf(" ") != -1) {
            temp = (value.split(" ")).join("");
        }
        if (temp.substring(0, 3) == "000") {
            tmp = true;
        }
        if (temp.substring(3, 5) == "00") {
            tmp = true;
        }
        if (temp.substring(5, 9) == "0000") {
            tmp = true;
        }

        if (tmp) {
            return false;
        } else
            return true;
    }

    static isValidDate = (value, userFormat = 'mm/dd/yyyy') => {
        const delimiter = /[^mdy]/.exec(userFormat)[0];
        const theFormat = userFormat.split(delimiter);
        const theDate = value.split(delimiter);

        function isDate(date, format) {
            let m, d, y, i = 0, len = format.length, f;
            for (i; i < len; i++) {
                f = format[i];
                if (/m/.test(f)) m = date[i];
                if (/d/.test(f)) d = date[i];
                if (/y/.test(f)) y = date[i];
            }
            return (
                m > 0 && m < 13 &&
                y && y.length === 4 &&
                d > 0 &&
                d <= (new Date(y, m, 0)).getDate()
            );
        }

        return isDate(theDate, theFormat);
    };

    static validateCreditCard = (cardnumber: string, cardtype: string = 'all') => {
        if (/[^0-9-\s]+/.test(cardnumber)) return false;

        // The Luhn Algorithm. It's so pretty.
        var nCheck = 0, nDigit = 0, bEven = false;
        cardnumber = cardnumber.replace(/\D/g, "");

        for (var n = cardnumber.length - 1; n >= 0; n--) {
            var cDigit = cardnumber.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
    };

    static isValidCreditCard = (type: string, ccnum: string) => {
        if (type) type = type.toUpperCase();
        if (ccnum) ccnum = ccnum.replace(/-/g, '');
        let re;
        switch (type) {
            case "AMEX":// American Express: length 15, prefix 34 or 37.
                re = /^3[4,7]\d{13}$/;
                break;
            case "DINERS":// Diners: length 14, prefix 30, 36, or 38.
                re = /^3[0,6,8]\d{12}$/;
                break;
            case 'CARTE_BLANCHE': //300 to 305
                re = /^30[1,2,3,4,5]\d{11}$/;
                break;
            case 'DISCOVER':
                re = /^6011?\d{4}?\d{4}?\d{4}$/;
                break;
            case 'DINERS_CLUB':
                re = /^((2014|2149)\d{10}|30([0-5])\d{11}|3(6|8)\d{12})$/;
                break;
            case 'ENROUTE':
            case 'JCB':
            case 'MASTERCARD':// Mastercard: length 16, prefix 51-55, dashes optional.
                re = /^5[1-5]\d{2}?\d{4}?\d{4}?\d{4}$/;
                break;
            case 'SOLO':
            case 'SWITCH':
            case 'VISA':
                re = /^4\d{3}?\d{4}?\d{4}?\d{4}$/;
                break;
            case 'LASER':
            default:
                break;
        }

        if (!re.test(ccnum)) return false;
        ccnum = ccnum.split("-").join("");

        let checksum = 0;
        for (let i = (2 - (ccnum.length % 2)); i <= ccnum.length; i += 2) {// Add even digits in even length strings or odd digits in odd length strings.
            checksum += parseInt(ccnum.charAt(i - 1));
        }

        for (let i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {// Analyze odd digits in even length strings or even digits in odd length strings.
            let digit = parseInt(ccnum.charAt(i - 1)) * 2;
            if (digit < 10) {
                checksum += digit;
            } else {
                checksum += (digit - 9);
            }
        }
        if ((checksum % 10) == 0) return true; else return false;
    };

    static isValidCitizenId = (id: string, country: string) => {

        function mod11And10(a: string) {
            for (var b = 5, c = a.length, d = 0; c > d; d++) b = (2 * (b || 10) % 11 + parseInt(a.charAt(d), 10)) % 10;
            return 1 === b
        };

        function luhn(a: any) {
            for (var b = a.length, c = 0, d = [
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
            ], e = 0; b--;) e += d[c][parseInt(a.charAt(b), 10)], c ^= 1;
            return e % 10 === 0 && e > 0
        };

        function mod37And36(a: any, b: any) {
            b = b || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var c = b.length, d = a.length, e = Math.floor(c / 2), f = 0; d > f; f++) e = (2 * (e || c) % (c + 1) + b.indexOf(a.charAt(f))) % c;
            return 1 === e
        }

        switch (country) {
            case "BR":
                if (id = id.replace(/\D/g, ""), !/^\d{11}$/.test(id) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(id)) return !1;
                let cx = 0;
                for (var br = 0; 9 > cx; cx++)
                    br += (10 - cx) * parseInt(id.charAt(cx), 10);
                if (br = 11 - br % 11, (10 === br || 11 === br) && (br = 0), br + "" !== id.charAt(9)) return !1;
                var d = 0;

                let cxx = 0
                for (cxx = 0; 10 > cxx; cxx++)
                    d += (11 - cxx) * parseInt(id.charAt(cxx), 10);
                return d = 11 - d % 11, (10 === d || 11 === d) && (d = 0), d + "" === id.charAt(10)

            case "HR":
                return /^[0-9]{11}$/.test(id) ? mod11And10(id) : !1

            case "IE" :
                if (!/^\d{7}[A-W][AHWTX]?$/.test(id)) return !1;
                let b = function (id: string) {
                    for (; id.length < 7;) id = "0" + id;
                    for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++) c += parseInt(id.charAt(d), 10) * (8 - d);
                    return c += 9 * b.indexOf(id.substr(7)), b[c % 23]
                };
                return 9 !== id.length || "A" !== id.charAt(8) && "H" !== id.charAt(8) ? id.charAt(7) === b(id.substr(0, 7)) : id.charAt(7) === b(id.substr(0, 7) + id.substr(8) + "")

            case "SM":
                return /^\d{5}$/.test(id)

            case "TH":
                if (id.length != 13) return false;
                for (var i = 0, sum = 0; i < 12; i++)
                    sum += parseFloat(id.charAt(i)) * (13 - i);

                if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12)))
                    return false;
                return true;

            case "TR":
                if (11 !== id.length) return !1;
                let s = 0;
                let c = 0;
                for (let b = 0; 10 > c; c++)
                    s += parseInt(id.charAt(c), 10);
                return s % 10 === parseInt(id.charAt(10), 10)

            default:
                throw new Error(`Country ${country} is not supported`);
        }
    };

}

export class PromiseUtil {

    /**
     * const delay = promisify((d, cb) => setTimeout(cb, d));
     * delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
     *
     * @param func
     */
    static promisify = func => (...args) => new Promise((resolve, reject) => func(...args, (err, result) => (err ? reject(err) : resolve(result))));
}

export class Queue {
    dataholder = [];

    constructor() {

    }

    public peek() {
        return this.dataholder.length > 0 ? this.dataholder[0] : null;
    }

    public add(data) {
        this.dataholder.push(data);
    }

    public size() {
        return this.dataholder.length;
    }

    public poll() {
        let ret = null;
        if (this.dataholder.length > 0) {
            ret = this.dataholder[0];
        }
        this.dataholder.shift();
        return ret;
    }

    public print() {
        console.log(this.dataholder);
    }
}


export class LimitedQueue extends Queue {

    constructor(private limit) {
        super();
    }

    public add(data) {
        super.add(data);
        while (this.size() > this.limit) super.poll();
    }
}

export class LRUCache {
    max;
    cache;

    constructor(max = 10) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    put(key, val) {
        if (this.cache.has(key)) this.cache.delete(key);
        else if (this.cache.size == this.max) this.cache.delete(this.first());
        this.cache.set(key, val);
    }

    first() {
        return this.cache.keys().next().value;
    }

    public print() {
        console.log(this.cache);
    }
}

export const clone = ArraysUtils.clone;
export const remove = ArraysUtils.remove;
export const shuffle = ArraysUtils.shuffle;
export const sample = ArraysUtils.sample;
export const uniq = ArraysUtils.uniq;
export const compact = ArraysUtils.compact;
export const reverse = ArraysUtils.reverse;
export const union = ArraysUtils.union;
export const intersection = ArraysUtils.intersection;
export const diff = ArraysUtils.diff;
export const flattenDeep = ArraysUtils.flattenDeep;
export const flattenByDepth = ArraysUtils.flattenByDepth;
export const last = ArraysUtils.last;
export const findIndices = ArraysUtils.findIndices;
export const chunk = ArraysUtils.chunk;
export const nthElement = ArraysUtils.nthElement;

export const camelCase = StringsUtils.camelCase;
export const pascalCase = StringsUtils.pascalCase;
export const titleCase = StringsUtils.titleCase;
export const toggleCase = StringsUtils.toggleCase;
export const swapCase = StringsUtils.swapCase;
export const dotCase = StringsUtils.dotCase;
export const kebabCase = StringsUtils.kebabCase;
export const snakeCase = StringsUtils.snakeCase;

export const truncateString = StringsUtils.truncateString;
export const random = StringsUtils.random;
export const guid = StringsUtils.guid;
export const formatCurrency = StringsUtils.formatCurrency;
export const toCurrency = StringsUtils.toCurrency;
export const isEmpty = StringsUtils.isEmpty;
export const isInteger = StringsUtils.isInteger;
export const isNumber = StringsUtils.isNumber;
export const isJsonString = StringsUtils.isJsonString;
export const isString = StringsUtils.isString;
export const removeHtmlTags = StringsUtils.removeHtmlTags;
export const escapeHTML = StringsUtils.escapeHTML;
export const unescapeHTML = StringsUtils.unescapeHTML;
export const isLowerCase = StringsUtils.isLowerCase;
export const isUpperCase = StringsUtils.isUpperCase;
export const words = StringsUtils.words;
export const mask = StringsUtils.mask;
export const pad = StringsUtils.pad;
export const removeNonASCII = StringsUtils.removeNonASCII;
export const hexToRGB = StringsUtils.hexToRGB;
export const RGBToHex = StringsUtils.RGBToHex;
export const extractURLs = StringsUtils.extractURLs;
export const extractPhones = StringsUtils.extractPhones;
export const extractEmails = StringsUtils.extractEmails;
export const extractPercent = StringsUtils.extractPercent;
export const extractNumbers = StringsUtils.extractNumbers;
export const extractUSCurrencyAndNumbers = StringsUtils.extractUSCurrencyAndNumbers;
export const extractHyphenated = StringsUtils.extractHyphenated;
export const extractTime = StringsUtils.extractTime;
export const extractDotted = StringsUtils.extractDotted;
export const extractQuoted = StringsUtils.extractQuoted;
export const replaceAt = StringsUtils.replaceAt;
export const removeAt = StringsUtils.removeAt;
export const size = StringsUtils.size;
export const queryStringToObject = StringsUtils.queryStringToObject;
export const slugify = StringsUtils.slugify;

export const average = MathsUtils.average;
export const averageBy = MathsUtils.averageBy;
export const gcd = MathsUtils.gcd;
export const lcm = MathsUtils.lcm;
export const isPrime = MathsUtils.isPrime;
export const primes = MathsUtils.primes;
export const isEven = MathsUtils.isEven;
export const isOdd = MathsUtils.isOdd;
export const maxBy = MathsUtils.maxBy;
export const minBy = MathsUtils.minBy;
export const sumBy = MathsUtils.sumBy;
export const median = MathsUtils.median;
export const percentile = MathsUtils.percentile;
export const toSafeInteger = MathsUtils.toSafeInteger;

export const removeObject = ObjectsUtils.remove;
export const safeparse = ObjectsUtils.safeparse;
export const isObject = ObjectsUtils.isObject;
export const isFunction = ObjectsUtils.isFunction;
export const isNil = ObjectsUtils.isNil;
export const isPrimitive = ObjectsUtils.isPrimitive;
export const type = ObjectsUtils.objectType;
export const lowercaseKeys = ObjectsUtils.lowercaseKeys;

export const isValidEmail = ValidationsUtils.isValidEmail;
export const isValidUrl = ValidationsUtils.isValidUrl;
export const isValidImage = ValidationsUtils.isValidImage;
export const isValidUSA_SSN = ValidationsUtils.isValidUSA_SSN;
export const isValidDate = ValidationsUtils.isValidDate;
export const isValidCreditCard = ValidationsUtils.isValidCreditCard;
export const isValidCitizenId = ValidationsUtils.isValidCitizenId;

export const promisify = PromiseUtil.promisify;
