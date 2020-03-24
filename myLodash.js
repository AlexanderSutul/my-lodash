const _ = (function () {
  return {
    chunk(array, size = 1) {
      if (size > array || !size) return array;
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        const sliced = array.slice(i, i + size);
        chunks.push(sliced);
      }
      return chunks;
    },
    compact(array) {
      if (!array.length) return array;
      return array.filter((item) => !!item);
    },
    concat(array, ...args) {
      return [...array, ...args.flat()];
    },
    difference(mainArray, excludedArray) {
      if (!mainArray.length || !excludedArray.length) return [...mainArray, ...excludedArray];
      const res = [];
      for (const item of mainArray) {
        if (excludedArray.indexOf(item) === -1) res.push(item);
      }
      return res;
    },
    join(array, separator = '') {
      let res = '';
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (i !== array.length - 1) {
          res += item + separator;
        } else {
          res += item;
        }
      }
      return res;
    },
    reverse(array) {
      const res = [];
      for (let i = array.length - 1; i >= 0; i--) {
        res.push(array[i]);
      }
      return res;
    },
    drop(array, n = 1) {
      if (n > array.length || !array.length) return [];
      const res = [];
      for (let i = n; i < array.length; i++) {
        res.push(array[i]);
      }
      return res;
    },
  };
}());

module.exports = _;
