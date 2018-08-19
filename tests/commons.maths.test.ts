import {average, averageBy, gcd, isEven, isOdd, isPrime, lcm, maxBy, minBy, primes, sumBy} from "../src/commons.utils";

describe('Maths Unit', () => {

    test('average', () => {
        expect(average(...[1, 2, 3, 4])).toEqual(2.5);
    });

    test('averageBy', () => {
        expect(averageBy([{a: 1}, {a: 2}, {a: 3}, {a: 4}], o => o.a)).toEqual(2.5);
    });

    test('gcd', () => {
        expect(gcd(12, 18)).toEqual(6);
    });

    test('lcm', () => {
        expect(lcm(12, 18)).toEqual(36);
    });

    test('isprime', () => {
        expect(isPrime(7)).toBeTruthy();
    });

    test('primes', () => {
        expect(primes(7)).toEqual([2,3,5,7]);
    });

    test('odd iseven', () => {
        expect(isOdd(5)).toBeTruthy();
        expect(isEven(4)).toBeTruthy();
    });

    test('MaxBy', () => {
        expect(maxBy([{a: 1}, {a: 2}, {a: 3}, {a: 4}], o => o.a)).toEqual(4)
    });

    test('MinBy', () => {
        expect(minBy([{a: 1}, {a: 2}, {a: 3}, {a: 4}], o => o.a)).toEqual(1)
    });

    test('sumBy', () => {
        expect(sumBy([{a: 1}, {a: 2}, {a: 3}, {a: 4}], o => o.a)).toEqual(10)
    });


});
