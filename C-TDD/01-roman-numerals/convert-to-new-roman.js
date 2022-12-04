function convertToNewRoman(n) {
  //create numberal to newRoman lookup table
  //create roman numeral accumulator
  //loop through lookup table
  //while (currentNumber <= n) then subtract currentNumber from n, Add symbol to accumulator

  const lookupTable = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let accumulator = '';

  for(const key in lookupTable){
     const numberValue = lookupTable[key];

     while (numberValue <= n) {
        n -= numberValue;
        accumulator += key;
     }
  }

  return accumulator;
}

module.exports = convertToNewRoman;
