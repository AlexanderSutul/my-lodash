const _ = require('./myLodash');

describe('tests for testing my own lodash', () => {
  it('chunks method test', () => {
    const res1 = _.chunk(['a', 'b', 'c', 'd'], 2);
    expect(res1).toEqual([['a', 'b'], ['c', 'd']]);
    const res2 = _.chunk(['a', 'b', 'c', 'd'], 3);
    expect(res2).toEqual([['a', 'b', 'c'], ['d']]);
  });
  it('compact method test', () => {
    const compacted = _.compact([0, 1, false, 2, '', 3]);
    expect(compacted).toEqual([1, 2, 3]);
  });
  it('concat method test', () => {
    const array = [1];
    const other = _.concat(array, 2, [3], [[4]]);
    expect(other).toEqual([1, 2, 3, [4]]);
  });
  it('difference method test', () => {
    const differences = _.difference([2, 1], [2, 3]);
    expect(differences).toEqual([1]);
  });
  it('join method test', () => {
    const joined = _.join(['a', 'b', 'c'], '~');
    expect(joined).toEqual('a~b~c');
  });
  it('reverse method test', () => {
    const reversed = _.reverse([1, 2, 3]);
    expect(reversed).toEqual([3, 2, 1]);
  });
  it('drop method test', () => {
    const dropped1 = _.drop([1, 2, 3]);
    expect(dropped1).toEqual([2, 3]);

    const dropped2 = _.drop([1, 2, 3], 2);
    expect(dropped2).toEqual([3]);

    const dropped3 = _.drop([1, 2, 3], 5);
    expect(dropped3).toEqual([]);

    const dropped4 = _.drop([1, 2, 3], 0);
    expect(dropped4).toEqual([1, 2, 3]);

    const dropped5 = _.drop([]);
    expect(dropped5).toEqual([]);
  });
  it('dropRight method test', () => {
    const dropped1 = _.dropRight([1, 2, 3]);
    expect(dropped1).toEqual([1, 2]);

    const dropped2 = _.dropRight([1, 2, 3], 2);
    expect(dropped2).toEqual([1]);

    const dropped3 = _.dropRight([1, 2, 3], 5);
    expect(dropped3).toEqual([]);

    const dropped4 = _.dropRight([1, 2, 3], 0);
    expect(dropped4).toEqual([1, 2, 3]);
  });
  it('head method test', () => {
    const headed = _.head([1, 2, 3]);
    expect(headed).toEqual(1);

    const headed2 = _.head([]);
    expect(headed2).toBeUndefined();
  });
  it('last method test', () => {
    const last = _.last([1, 2, 3]);
    expect(last).toEqual(3);

    const last2 = _.last([]);
    expect(last2).toBeUndefined();
  });
  it('indexOf method test', () => {
    const index = _.indexOf([1, 2, 1, 2], 2);
    expect(index).toEqual(1);

    const index2 = _.indexOf([1, 2, 1, 2], 2, 2);
    expect(index2).toEqual(3);

    const index3 = _.indexOf([1, 2, 1, 2], 5);
    expect(index3).toEqual(-1);

    const index4 = _.indexOf([1, 2, 3, 4, 5], 0, 15);
    expect(index4).toBeUndefined();
  });
});
