import {compact, diff, findIndices, flattenDeep, intersection, last, remove, reverse, sample, shuffle, union, uniq} from "../src/commons.utils";

describe('Remove Unit', () => {

    test('Array Remove Scenarios', () => {
        expect(remove(2, [1, 2, 3, 4, 2, 1])).toEqual([1, 3, 4, 1]);
    });

    test('Array Shuffle Scenarios', () => {
        expect(shuffle([1, 2, 3, 4, 2, 1]).length).toEqual(6);
    });

    test('Array Sample Scenarios', () => {
        expect(sample([1, 1, 1, 1, 1])).toEqual(1);
    });

    test('Array Uniq Scenarios', () => {
        expect(uniq([1, 1, 1, 1, 1])).toEqual([1]);
    });

    test('Array Compact Scenarios', () => {
        expect(compact([1, '', false])).toEqual([1]);
    });

    test('Array Union Scenarios', () => {
        expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Array intersection Scenarios', () => {
        expect(intersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
    });

    test('Array diff Scenarios', () => {
        expect(diff([1, 2, 3], [3, 4, 5])).toEqual([1, 2]);
    });

    test('Array flatten Scenarios', () => {
        expect(flattenDeep([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Array last Scenarios', () => {
        expect(last([1, 2, 3, 4, 5])).toEqual(5);
    });

    test('Array Indices Scenarios', () => {
        expect(findIndices([1, 2, 1], 1)).toEqual([0, 2]);
    });

    test('Array Indices Scenarios', () => {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
});
