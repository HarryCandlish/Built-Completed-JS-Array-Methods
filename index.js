function joinArrays(array1, array2) {
  return array1.concat(array2);
}

function overWriteItem(arr) {
  return arr.copyWithin(0, 4);
}

module.exports = {
  joinArrays,
  overWriteItem
};
