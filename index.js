function joinArrays(array1, array2) {
  return array1.concat(array2);
}

function overWriteItem(array) {
  return array.copyWithin(0, 4);
}

function entries(array) {
  return Object.entries(array);
}

function everyAge(array, value) {
  return array.every(age => age >= value);
}

function fillArray(array, value) {
  return array.fill(value, 1, 2);
}

function filterArray(array) {
  x = array.filter(n => n % 3 === 0);
  return x;
}

function findNumber(array, value) {
  x = array.find(n => n >= value + 1);
  return x;
}

module.exports = {
  joinArrays,
  overWriteItem,
  entries,
  everyAge,
  fillArray,
  filterArray,
  findNumber
};
