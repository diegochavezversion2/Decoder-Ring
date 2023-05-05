// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input = "", alphabet = "", encode = true) {
    let lowerInput = input.toLowerCase()
    let codeWord = "";
    const regularAlphabet = "abcdefghijklmnopqrstuvwxyz";
    if (alphabet.length !== 26) {
      return false;
    }
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i+1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false
        }
      }
    }
    if (encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        for (let j = 0; j < regularAlphabet.length; j++) {
          if(lowerInput[i] === regularAlphabet[j]) {
            codeWord += alphabet[j]
          }
        }
        if (lowerInput[i] === " ") {
          codeWord += lowerInput[i];
        }
      }
    } else {
      for (let i = 0; i < lowerInput.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
          if(lowerInput[i] === alphabet[j]) {
            codeWord += regularAlphabet[j] 
          }
        }
        if (lowerInput[i] === " ") {
          codeWord += lowerInput[i];
        }
      }
    }
    return codeWord;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
