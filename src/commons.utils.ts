class ArraysUtils {

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

class ObjectsUtils{
    static remove = (key, {[key]: remove, ...rest}) => rest;
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

    static random = (length: number, type: string = "alphabetical") => {
        var chars;

        switch (type) {
            case 'alphabetical':
                chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            case 'numerical':
                chars = '0123456789';
                break;
            case 'all':
                chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*_~';
                break;
            default:
                chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        let result: string = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

        //in case starts with 0 we need to remove it.
        while (type == 'numerical' && result.startsWith("0")) {
            result = chars[Math.floor(Math.random() * chars.length)] + result.substring(1, result.length);
        }

        return result;
    };

    static isEmpty = (a: string) => {

        if (!a || a.length === 0 || a === "" || typeof a === "undefined" || !/[^\s]/.test(a) || /^\s*$/.test(a) || a.replace(/\s/g, "") === "") {
            return true;
        }
        return false;
    };

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


    static removeHtmlTags = (a: string) => {
        return a.replace(/(<([^>]+)>)/ig, "");
    };

    static isInteger = (a: any) => {
        return !isNaN(parseFloat(a)) && isFinite(a);
    };

    static formatCurrency = (value: number) => {
        return parseFloat('' + value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };

    static guid = (hyphen: boolean = false) => {
        const hyphenChar = hyphen ? '-' : '';

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + hyphenChar + s4() + hyphenChar + s4() + hyphenChar + s4() + hyphenChar + s4() + s4() + s4();
    };

    static randomColor = (string: string, s: number = 60, l: number = 70) => {
        if (!string) return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);

        let hash = 0;
        for (let i = 0; i < string.length; i++) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        const h = hash % 360;
        return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    };

}



class ValidationsUtils {

    static validateEmail = (email: string) => {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email)) {
            return true;
        }
        return false;
    };

    static validateUrl = (value: string) => {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        if (regexp.test(value.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    };

    static validateImage = (value: string) => {
        var exp = /.*\.(gif)|(jpeg)|(jpg)|(png)$/;
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

    static validateUSA_SSN(value: string) {
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

    static validateDate(dateStr: string, format: string) {
        if (format == null) {
            format = "MDY";
        }
        format = format.toUpperCase();
        if (format.length != 3) {
            format = "MDY";
        }
        if ((format.indexOf("M") == -1) || (format.indexOf("D") == -1) || (format.indexOf("Y") == -1)) {
            format = "MDY";
        }
        if (format.substring(0, 1) == "Y") { // If the year is first
            var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
            var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
        } else if (format.substring(1, 2) == "Y") { // If the year is second
            var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
            var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
        } else {
            var reg1 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/
            var reg2 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
        }
        if ((reg1.test(dateStr) == false) && (reg2.test(dateStr) == false)) {
            return false;
        }
        var parts = dateStr.split(RegExp.$1); // Split into 3 parts based on what the divider was

        if (format.substring(0, 1) == "M") {
            var mm = parts[0];
        }
        else if (format.substring(1, 2) == "M") {
            var mm = parts[1];
        } else {
            var mm = parts[2];
        }
        if (format.substring(0, 1) == "D") {
            var dd = parts[0];
        }
        else if (format.substring(1, 2) == "D") {
            var dd = parts[1];
        } else {
            var dd = parts[2];
        }
        if (format.substring(0, 1) == "Y") {
            var yy = parts[0];
        }
        else if (format.substring(1, 2) == "Y") {
            var yy = parts[1];
        } else {
            var yy = parts[2];
        }
        if (parseFloat(yy) <= 50) {
            yy = (parseFloat(yy) + 2000).toString();
        }
        if (parseFloat(yy) <= 99) {
            yy = (parseFloat(yy) + 1900).toString();
        }
        var dt = new Date(parseFloat(yy), parseFloat(mm) - 1, parseFloat(dd), 0, 0, 0, 0);
        if (parseFloat(dd) != dt.getDate()) {
            return false;
        }
        if (parseFloat(mm) - 1 != dt.getMonth()) {
            return false;
        }
        return true;
    }

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
        switch (type) {
            case "AmEx":
                // American Express: length 15, prefix 34 or 37.
                var re = /^3[4,7]\d{13}$/;
                break;
            case "Diners":
                // Diners: length 14, prefix 30, 36, or 38.
                var re = /^3[0,6,8]\d{12}$/;
                break;
            case 'CARTE_BLANCHE':
                //TODO
                break;
            case 'DISCOVER':
                var re = /^6011-?\d{4}-?\d{4}-?\d{4}$/;
                break;
            case 'DINERS_CLUB':

            case 'ENROUTE':
            case 'JCB':
            case 'MASTERCARD':
                // Mastercard: length 16, prefix 51-55, dashes optional.
                var re = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
                break;
            case 'SOLO':
            case 'SWITCH':
            case 'VISA':
                var re = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
                break;
            case 'LASER':
            default:
                break;
        }

        if (!re.test(ccnum)) return false;
        // Remove all dashes for the checksum checks to eliminate negative numbers
        ccnum = ccnum.split("-").join("");
        // Checksum ("Mod 10")
        // Add even digits in even length strings or odd digits in odd length strings.
        var checksum = 0;
        for (var i = (2 - (ccnum.length % 2)); i <= ccnum.length; i += 2) {
            checksum += parseInt(ccnum.charAt(i - 1));
        }
        // Analyze odd digits in even length strings or even digits in odd length strings.
        for (var i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {
            var digit = parseInt(ccnum.charAt(i - 1)) * 2;
            if (digit < 10) {
                checksum += digit;
            } else {
                checksum += (digit - 9);
            }
        }
        if ((checksum % 10) == 0) return true; else return false;
    };

    static validateCitizenId = (id: string, country: string) => {

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


export const remove = ArraysUtils.remove;
export const shuffle = ArraysUtils.shuffle;
export const sample = ArraysUtils.sample;
export const uniq = ArraysUtils.uniq;
export const compact = ArraysUtils.compact;
export const reverse = ArraysUtils.reverse;
export const union = ArraysUtils.union;
export const intersection = ArraysUtils.intersection;
export const diff = ArraysUtils.diff;
export const flatten = ArraysUtils.flatten;
export const last = ArraysUtils.last;
export const findIndices = ArraysUtils.findIndices;
export const camelCase = StringsUtils.camelCase;
export const pascalCase = StringsUtils.pascalCase;
export const titleCase = StringsUtils.titleCase;
export const toggleCase = StringsUtils.toggleCase;
export const swapCase = StringsUtils.swapCase;
export const dotCase = StringsUtils.dotCase;
export const random = StringsUtils.random;
export const randomColor = StringsUtils.randomColor;
export const guid = StringsUtils.guid;
export const formatCurrency = StringsUtils.formatCurrency;
export const isEmpty = StringsUtils.isEmpty;
export const isInteger = StringsUtils.isInteger;
export const isJsonString = StringsUtils.isJsonString;
export const isString = StringsUtils.isString;
export const removeHtmlTags = StringsUtils.removeHtmlTags;
export const removeObject = ObjectsUtils.remove;
export const validateEmail= ValidationsUtils.validateEmail;
export const validateUrl= ValidationsUtils.validateUrl;
export const validateImage= ValidationsUtils.validateImage;
export const validateUSA_SSN= ValidationsUtils.validateUSA_SSN;
export const validateDate= ValidationsUtils.validateDate;
export const validateCreditCard= ValidationsUtils.validateCreditCard;
export const isValidCreditCard= ValidationsUtils.isValidCreditCard;
export const validateCitizenId= ValidationsUtils.validateCitizenId;