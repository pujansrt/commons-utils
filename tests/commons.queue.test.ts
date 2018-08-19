import {Queue, removeObject} from "../src/commons.utils";

describe('Queue Unit', () => {

    test('Queue Add Scenarios', () => {
        const q = new Queue();
        q.add(1);
        q.add(2);
        q.add(3);

        expect(q.size()).toEqual(3);
        expect(q.peek()).toEqual(1);

        q.poll();
        expect(q.size()).toEqual(2);
        expect(q.peek()).toEqual(2);

        q.poll();
        expect(q.size()).toEqual(1);
        expect(q.peek()).toEqual(3);

        q.poll();
        expect(q.size()).toEqual(0);
        expect(q.peek()).toBeNull();
    });
});
