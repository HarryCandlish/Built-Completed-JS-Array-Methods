function joinArrays(array1, array2) {
  return array1.concat(array2);
}

function overWriteItem(array) {
  return array.copyWithin(0, 4);
}

function entries(array) {
  return Object.entries(array);
}

function everyAge(array) {
  return array.every(age => age >= 50);
}

module.exports = {
  joinArrays,
  overWriteItem,
  entries,
  everyAge
};
