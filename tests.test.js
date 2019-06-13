const test1 = require("./index");

test("join two or more arrays, and return a copy of the joined arrays", () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = test1.joinArrays(array1, array2);
  expect(actual).toEqual(expected);
});
