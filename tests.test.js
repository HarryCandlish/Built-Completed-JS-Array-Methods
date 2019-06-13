const test1 = require("./index");

test("join two or more arrays, and return a copy of the joined arrays", () => {
  const arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = test1.joinArrays(arr);
  expect(actual).toEqual(expected);
});
