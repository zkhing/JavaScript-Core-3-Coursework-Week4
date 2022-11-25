let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  let words = ["irina", "etza", "daniel"];
  let expected = ["rn", "tz", "dnl"];

  let result = removeVowelsFromWords(words);

  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
