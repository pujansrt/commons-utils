import {removeObject} from "../src/commons.utils";

describe('Remove Unit', () => {

    test('Array Indices Scenarios', () => {
        expect(removeObject('name', {name: 'a'})).toEqual({});
    });
});
