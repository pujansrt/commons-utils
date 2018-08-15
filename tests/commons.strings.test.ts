import {
    camelCase,
    dotCase, formatCurrency,
    guid,
    isEmpty, isInteger,
    isJsonString, isString,
    pascalCase,
    random,
    removeHtmlTags,
    titleCase,
    toggleCase
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
