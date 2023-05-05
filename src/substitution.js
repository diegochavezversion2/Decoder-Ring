

const substitutionModule = (function () {
  

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
