import {CommonsUtils} from "../src/commons.index";

describe('Case Unit', () => {

    test('CamelCase Scenarios', () => {
        expect(CommonsUtils.camelCase('hello world')).toBe('helloWorld');
    });

    test('PascalCase Scenarios', () => {
        expect(CommonsUtils.pascalCase('hello world')).toBe('HelloWorld');
    });

    test('Title Case Scenarios', () => {
        expect(CommonsUtils.titleCase('hello world')).toBe('Hello World');
    });

    test('ToggleCase Scenarios', () => {
        expect(CommonsUtils.toggleCase('Hello world')).toBe('hELLO WORLD');
    });

    test('Dotcase Scenarios', () => {
        expect(CommonsUtils.dotCase('hello world')).toBe('hello.world');
        expect(CommonsUtils.dotCase('helloWorld')).toBe('hello.world');
        expect(CommonsUtils.dotCase('helloWORLD')).toBe('hello.w.o.r.l.d');
        expect(CommonsUtils.dotCase('hello World')).toBe('hello.world');
    });

    test('Random Scenarios', () => {
        expect(CommonsUtils.random(10).length).toEqual(10);
        expect(CommonsUtils.random(10,'alphabetical').length).toEqual(10);
    });

    test('RandomColor Scenarios', () => {
        expect(CommonsUtils.randomColor()).toContain('#');
    });

    test('Guid Scenarios', () => {
        expect(CommonsUtils.guid().length).toEqual(32);
    });

    test('String ', () => {
        expect(CommonsUtils.isEmpty()).toBeTruthy();
        expect(CommonsUtils.isJsonString('{}')).toBeTruthy();
        expect(CommonsUtils.isString('Hi')).toBeTruthy();
    });

    test('Format Currency', () => {
        expect(CommonsUtils.formatCurrency('1000')).toEqual('1,000.00');
    });

    test('is Integer Scenarios', () => {
        expect(CommonsUtils.isInteger(1000)).toBeTruthy();
    });

    test('Remove Html Tags', () => {
        expect(CommonsUtils.removeHtmlTags('<html>Hi</html>')).toEqual('Hi');
    });

});
