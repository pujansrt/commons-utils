import {CommonsUtils} from "../src/commons.index";

describe('Remove Unit', () => {

    test('Array Remove Scenarios', () => {
        expect(CommonsUtils.remove(2, [1, 2, 3, 4, 2, 1])).toEqual([1, 3, 4, 1]);
    });

    test('Array Shuffle Scenarios', () => {
        expect(CommonsUtils.shuffle([1, 2, 3, 4, 2, 1]).length).toEqual(6);
    });

    test('Array Sample Scenarios', () => {
        expect(CommonsUtils.sample([1, 1, 1, 1, 1])).toEqual(1);
    });

    test('Array Uniq Scenarios', () => {
        expect(CommonsUtils.uniq([1, 1, 1, 1, 1])).toEqual([1]);
    });

    test('Array Compact Scenarios', () => {
        expect(CommonsUtils.compact([1, '', false])).toEqual([1]);
    });

    test('Array Union Scenarios', () => {
        expect(CommonsUtils.union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Array intersection Scenarios', () => {
        expect(CommonsUtils.intersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
    });

    test('Array diff Scenarios', () => {
        expect(CommonsUtils.diff([1, 2, 3], [3, 4, 5])).toEqual([1, 2]);
    });

    test('Array flatten Scenarios', () => {
        expect(CommonsUtils.flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Array last Scenarios', () => {
        expect(CommonsUtils.last([1, 2, 3, 4, 5])).toEqual(5);
    });

    test('Array Indices Scenarios', () => {
        expect(CommonsUtils.findIndices([1, 2, 1], 1)).toEqual([0, 2]);
    });

    test('Array Indices Scenarios', () => {
        expect(CommonsUtils.reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
});
