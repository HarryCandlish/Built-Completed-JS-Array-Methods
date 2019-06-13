const test1 = require("./index");

test("join two or more arrays using (concat()) to return a copy of the joined arrays", () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = test1.joinArrays(array1, array2);
  expect(actual).toEqual(expected);
});

test("use (copyWithin()) method to overwrite item in an array", () => {
  const array = ["a", "b", "c", "d", "e"];
  const expected = ["e", "b", "c", "d", "e"];
  const actual = test1.overWriteItem(array);
  expect(actual).toEqual(expected);
});

test("use (Object.entries()) method to return an Array Iterator Object with key/value pairs", () => {
  const array = ["Ibex"];
  const expected = [["0", "Ibex"]];
  const actual = test1.entries(array);
  expect(actual).toEqual(expected);
});

test("check if all values in the ages array are 50 or over using (every())", () => {
  const array = [50, 54, 60, 76];
  const expected = true;
  const actual = test1.everyAge(array);
  expect(actual).toEqual(expected);
});
