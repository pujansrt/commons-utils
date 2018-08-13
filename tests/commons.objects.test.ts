import {CommonsUtils} from "../src/commons.index";

describe('Remove Unit', () => {

    test('Array Indices Scenarios', () => {
        expect(CommonsUtils.removeObject('name', {name: 'a'})).toEqual({});
    });
});
