// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    const number = numbers.filter((value) => typeof value === "number");
    return number.reduce((sum, value) =>  sum + value,0) / number.length;
}

module.exports = average;
