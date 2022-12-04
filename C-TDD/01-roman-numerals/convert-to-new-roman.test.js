let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  let number = 1;
  let expected = 'I';

  let output = convertToNewRoman(expected);

  expect(output).toBe(expected);
});
