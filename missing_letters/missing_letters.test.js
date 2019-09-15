const missingLetters = require("./missing_letters");
// let testString = '';

describe("Find the missing letter in the passed letter range and return it. If all letters are present, return undefined", () => {
  test.each([['abce', 'd'], ['abcdefghjklmno', 'i'], ['abcdefghijklmnopqrstuvwxyz', undefined]])('passing `$s` missing `$s`',
    (testStr, expected) => {
      expect(missingLetters(testStr)).toEqual(expected);
    });
  // testString = "abce";
  // test(`missingLeeters(${testString}) === "d"`, () => {
  //   expect(missingLetters(testString)).toEqual("d");
  // });

  // testString = "abcdefghjklmno";
  // test(`missingLetter(${testString}) === "i"`, () => {
  //   expect(missingLetters(testString)).toEqual("i");
  // });

  // testString = "abcdefghijklmnopqrstuvwxyz";
  // test(`missingLetter(${testString}) === undefined`, () => {
  //   expect(missingLetters(testString)).toEqual(undefined);
  // });
});
