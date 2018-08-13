export class StringsUtils {

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