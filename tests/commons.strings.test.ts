import {
    camelCase,
    dotCase,
    escapeHTML,
    extractDotted,
    extractEmails,
    extractHyphenated,
    extractNumbers,
    extractPercent,
    extractPhones,
    extractQuoted,
    extractTime,
    extractURLs,
    formatCurrency,
    guid,
    hexToRGB,
    isEmpty,
    isInteger,
    isJsonString,
    isLowerCase,
    isNumber,
    isString,
    isUpperCase,
    isValidCreditCard,
    isValidEmail,
    isValidImage,
    isValidUrl,
    kebabCase,
    mask,
    pad,
    pascalCase,
    promisify,
    queryStringToObject,
    random,
    removeAt,
    removeHtmlTags,
    removeNonASCII,
    replaceAt,
    RGBToHex,
    size,
    slugify,
    snakeCase,
    swapCase,
    titleCase,
    toCurrency,
    toggleCase,
    truncateString,
    unescapeHTML,
    words,
} from "../src/commons.utils";

describe('Case Unit', () => {

    test('CamelCase Scenarios', () => {
        expect(camelCase('hello world')).toBe('helloWorld');
    });

    test('PascalCase Scenarios', () => {
        expect(pascalCase('hello world')).toBe('HelloWorld');
    });

    test('Title Case Scenarios', () => {
        expect(titleCase('hello world')).toBe('Hello World');
    });

    test('ToggleCase Scenarios', () => {
        expect(toggleCase('Hello world')).toBe('hELLO WORLD');
        expect(swapCase('Hello world')).toBe('hELLO WORLD');
    });

    test('Dotcase Scenarios', () => {
        expect(dotCase('hello world')).toBe('hello.world');
        expect(dotCase('helloWorld')).toBe('hello.world');
        expect(dotCase('helloWORLD')).toBe('hello.w.o.r.l.d');
        expect(dotCase('hello World')).toBe('hello.world');
    });

    test('kebabCase Scenarios', () => {
        expect(kebabCase('hello world')).toBe('hello-world');
    });
    test('snakeCase Scenarios', () => {
        expect(snakeCase('hello world')).toBe('hello_world');
    });

    test('Random Scenarios', () => {
        expect(random.alphabetical(10).length).toEqual(10);
    });

    test('RandomColor Scenarios', () => {
        expect(random.color('')).toContain('#');
    });

    test('Guid Scenarios', () => {
        expect(guid().length).toEqual(32);
    });

    test('String ', () => {
        expect(isEmpty(undefined)).toBeTruthy();
        expect(isJsonString('{}')).toBeTruthy();
        expect(isString('Hi')).toBeTruthy();
    });

    test('Format Currency', () => {
        expect(formatCurrency(1000)).toEqual('1,000.00');
    });

    test('is Integer Scenarios', () => {
        expect(isInteger(1000)).toBeTruthy();
    });

    test('isNumber Scenarios', () => {
        expect(isNumber(1000.11)).toBeTruthy();
    });

    test('Remove Html Tags', () => {
        expect(removeHtmlTags('<html>Hi</html>')).toEqual('Hi');
    });

    test('truncateString', () => {
        expect(truncateString('This is long string', 7)).toEqual('This...');
    });

    test('toCurrency', () => {
        expect(toCurrency(123456.789, 'EUR')).toEqual('€ 123,456.79');
        expect(toCurrency(123456.789, 'USD', 'en-us')).toEqual('$123,456.79');
        expect(toCurrency(322342436423.2435, 'JPY')).toEqual('JP¥ 322,342,436,423');
    });

    test('escapeHTML', () => {
        expect(escapeHTML('This <is> HTML & Other string')).toEqual('This &lt;is&gt; HTML &amp; Other string');
    });

    test('unescapeHTML', () => {
        expect(unescapeHTML('This &lt;is&gt; HTML &amp; Other string')).toEqual('This <is> HTML & Other string');
    });

    test('isUpperCase isLowerCase', () => {
        expect(isUpperCase('HELLO')).toBeTruthy();
        expect(isLowerCase('hello')).toBeTruthy();
    });

    test('words', () => {
        expect(words('Starry knights').length).toEqual(2);
    });

    test('Mask', () => {
        expect(mask('1234567890', 3, '*')).toEqual('*******890');
    });

    test('pad', () => {
        expect(pad('cat', 8)).toEqual('  cat   ');
    });

    test('removeNonASCII', () => {
        expect(removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ')).toEqual('lorem-ipsum');
    });

    test('hexToRGB', () => {
        expect(hexToRGB('#aaaaaa')).toEqual('rgb(170, 170, 170)');
    });

    test('RGBToHex', () => {
        expect(RGBToHex(0, 0, 0)).toEqual('000000');
    });

    test('extractURLs', () => {
        expect(extractURLs('some http://google.com and https://domain.com')).toEqual(['http://google.com', 'https://domain.com']);
    });

    test('extractPhones', () => {
        expect(extractPhones('My Phone is +919839343934')).toEqual(['+919839343934']);
    });
    test('extractPercent', () => {
        expect(extractPercent('My Phone is +919839343934 with 90%')).toEqual(['90%']);
    });
    test('extractNumbers', () => {
        expect(extractNumbers('839343934')).toEqual(['839343934']);
    });
    test('extractHyphenated', () => {
        expect(extractHyphenated('Serial AB-DE-SC-12')).toEqual(['AB-DE-SC-12']);
    });
    test('extractTime', () => {
        expect(extractTime('Time is 13:12')).toEqual(['13:12']);
    });
    test('extractDotted', () => {
        expect(extractDotted('you.me')).toEqual(['u.m']);
    });

    test('extractQuoted', () => {
        expect(extractQuoted('Sentence for "Today"')).toEqual(['"Today"']);
    });

    test('replaceAt', () => {
        expect(replaceAt('you.me', 'Z', 3)).toEqual('youZme');
    });

    test('removeAt', () => {
        expect(removeAt('you.me', 3)).toEqual('youme');
    });
});

describe('Validation', () => {

    test('Email Truthy', () => {
        expect(isValidEmail('pujan@ea.com')).toBeTruthy();
    });

    test('Email Falsy', () => {
        expect(isValidEmail('pujan@localhost')).toBeFalsy();
    });

    test('URL Truthy', () => {
        expect(isValidUrl('https://google.com')).toBeTruthy();
    });

    test('URL Falsy', () => {
        expect(isValidUrl('hts://google.com')).toBeFalsy();
    });

    test('CreditCard Truthy - VISA', () => {
        expect(isValidCreditCard('VISA', '4111-1111-1111-1111')).toBeTruthy();
    });

    test('CreditCard Truthy - DINERS CLUB', () => {
        expect(isValidCreditCard('DINERS_CLUB', '30569309025904')).toBeTruthy();
        expect(isValidCreditCard('DINERS_CLUB', '38520000023237')).toBeTruthy();
        expect(isValidCreditCard('DINERS_CLUB', '30000000000004')).toBeTruthy();
    });

    test('Image Truthy', () => {
        expect(isValidImage('test.jpeg')).toBeTruthy();
    });

    test('slugify', () => {
        expect(slugify('How to debug an application')).toEqual('how-to-debug-an-application');
    });
});

describe('Extract', () => {

    test('Email Extract Truthy', () => {
        expect(extractEmails('some text and one@domain.com and two@domain.com')).toEqual(['one@domain.com', 'two@domain.com']);
    });
});

describe('Size', () => {

    test('Length', () => {
        expect(size(null)).toEqual(0);
        expect(size('abc')).toEqual(3);
        expect(size([1, 2, 3])).toEqual(3);
        expect(size({a: 1, b: 1, c: 1})).toEqual(3);
    });

    test('queryStringToObject', () => {
        expect(queryStringToObject('?q=amanda&loc=900&mob=304930493')).toEqual({q: 'amanda', loc: '900', mob: '304930493'});
        expect(queryStringToObject('q=amanda&loc=900&mob=304930493')).toEqual({q: 'amanda', loc: '900', mob: '304930493'});
    });

    test('Promisify', () => {

        function run() {
            setTimeout(() => {
                console.log('Done...'), 2000
            });
        }

        promisify(() => run());
    });
});