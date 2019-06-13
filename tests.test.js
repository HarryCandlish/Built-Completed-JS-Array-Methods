const test1 = require("./index");

test("join two or more arrays, and return a copy of the joined arrays", () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = test1.joinArrays(array1, array2);
  expect(actual).toEqual(expected);
});

test("overwrite an item in an array with an existing item of the array", () => {
  const array = ["a", "b", "c", "d", "e"];
  const expected = ["e", "b", "c", "d", "e"];
  const actual = test1.overWriteItem(array);
  expect(actual).toEqual(expected);
});
