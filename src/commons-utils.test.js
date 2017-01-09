var expect = require('chai').expect;
var Commons = require('../dist/commons-utils.js');

var arr_o = [1,2,3,4,5];
var arr = [1,2,3,4,5];
var arr2 = [1,2,3];

describe('commons-utils',function () {
    it('easify', function () {
        expect(Commons.ArrayUtils.easify(arr)[-1]).to.eqls(5);
    });

    it('shuffle', function () {
        expect(Commons.ArrayUtils.shuffle([1,2,3,4,5])).to.not.equal([1,2,3,4,5]);
    });

    it('random', function () {
        expect(Commons.ArrayUtils.random(5, 20)).to.have.length.above(2);
    });


    it('remove', function () {
        expect(Commons.ArrayUtils.remove(arr,3)).to.eqls([1,2,4,5]);
    });

    it('diff', function () {
        expect(Commons.ArrayUtils.diff([1,2,3,4],[1,2,3,4,5])).to.eqls([5]);
    });

    it('union', function () {
        expect(Commons.ArrayUtils.union([1,2,3,4],[1,2,3,4,5])).to.eqls([1,2,3,4,5]);
    });

    it('intersection', function () {
        expect(Commons.ArrayUtils.intersection([1,2,3,4],[1,2,3,4,5])).to.eqls([1,2,3,4]);
    });

    it('removeDuplicates', function () {
        expect(Commons.ArrayUtils.removeDuplicates([1,2,3,4,1,2,3,4,5])).to.eqls([1,2,3,4,5]);
    });

    it('compact', function () {
        expect(Commons.ArrayUtils.compact([1,2,false,,,'',undefined,null])).to.eqls([1,2]);
    });

    it('flatten', function () {
        expect(Commons.ArrayUtils.flatten([1, [2, 'a', { b: 1, c: [2, 3] } ], [3, 4, [5, 6]]])).to.eqls([ 1, 2, 'a', { b: 1, c: [ 2, 3 ] }, 3, 4, 5, 6 ]);
    });

    it('chunk', function () {
        expect(Commons.ArrayUtils.chunk(['a','b','c','d','e'],2)).to.eqls([['a','b'],['c','d','e']]);
    });

    it('reverse', function () {
        expect(Commons.ArrayUtils.reverse(['a','b','c','d','e'],2)).to.eqls(['e', 'd', 'c', 'b', 'a']);
    });
});