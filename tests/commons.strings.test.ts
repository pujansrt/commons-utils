import {
    camelCase,
    dotCase,
    extractEmails,
    formatCurrency,
    guid,
    isEmpty,
    isInteger,
    isJsonString,
    isString,
    isValidCreditCard,
    pascalCase,
    random,
    removeHtmlTags,
    titleCase,
    toggleCase,
    validateCreditCard,
    validateEmail,
    validateImage,
    validateUrl
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
    });

    test('Dotcase Scenarios', () => {
        expect(dotCase('hello world')).toBe('hello.world');
        expect(dotCase('helloWorld')).toBe('hello.world');
        expect(dotCase('helloWORLD')).toBe('hello.w.o.r.l.d');
        expect(dotCase('hello World')).toBe('hello.world');
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

    test('Remove Html Tags', () => {
        expect(removeHtmlTags('<html>Hi</html>')).toEqual('Hi');
    });


});

describe('Validation', () => {

    test('Email Truthy', () => {
        expect(validateEmail('pujan@ea.com')).toBeTruthy();
    });

    test('Email Falsy', () => {
        expect(validateEmail('pujan@localhost')).toBeFalsy();
    });

    test('URL Truthy', () => {
        expect(validateUrl('https://google.com')).toBeTruthy();
    });

    test('URL Falsy', () => {
        expect(validateUrl('hts://google.com')).toBeFalsy();
    });

    test('CreditCard Truthy', () => {
        expect(validateCreditCard('4111-1111-1111-1111')).toBeTruthy();
    });

    test('CreditCard Truthy - VISA', () => {
        expect(isValidCreditCard('VISA', '4111-1111-1111-1111')).toBeTruthy();
    });

    test('CreditCard Falsy', () => {
        expect(validateCreditCard('111111111')).toBeFalsy();
    });

    test('CreditCard Truthy - DINERS CLUB', () => {
        expect(isValidCreditCard('DINERS_CLUB', '30569309025904')).toBeTruthy();
        expect(isValidCreditCard('DINERS_CLUB', '38520000023237')).toBeTruthy();
        expect(isValidCreditCard('DINERS_CLUB', '30000000000004')).toBeTruthy();
    });

    test('Image Truthy', () => {
        expect(validateImage('test.jpeg')).toBeTruthy();
    });
});

describe.only('Extract', () => {

    test('Email Extract Truthy', () => {
        expect(extractEmails('some text and one@domain.com and two@domain.com')).toEqual(['one@domain.com', 'two@domain.com']);
    });
});