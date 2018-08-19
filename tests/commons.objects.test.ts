import {isFunction, isNil, isObject, isPrimitive, removeObject, safeparse, type} from "../src/commons.utils";

describe('Remove Unit', () => {

    test('Array Indices Scenarios', () => {
        expect(removeObject('name', {name: 'a'})).toEqual({});
    });

    test('Is Object', () => {
        expect(isObject({name: 'a'})).toBeTruthy();
    });

    test('Object', () => {
        expect(type({name: 'a'})).toEqual('object');
        expect(type('Pujan')).toEqual('string');
    });

    test('safeparse', () => {
        expect(safeparse('{"name": "a"}')).toEqual({name: "a"});
    });

    test('isPrimitive', () => {
        expect(isPrimitive(true)).toBeTruthy();
    });

    test('isFunction', () => {
        function fn() {return 1}
        expect(isFunction(fn)).toBeTruthy();
    });

    test('isNill', () => {
        expect(isNil(undefined)).toBeTruthy();
        expect(isNil(null)).toBeTruthy();
    });
});
