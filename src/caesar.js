// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input = "", shift = 0, encode = true) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let superSecretCode = "";
    if (shift < -25 || shift > 25 || shift === 0) {
      return false
    };
    if(!encode) shift = -shift;
    const lowerInput = input.toLowerCase()
    for (let i = 0; i < lowerInput.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (lowerInput[i] === letters[j]) {
          actualShift = (shift + j) % 26
          if (actualShift < 0) actualShift += 26
          superSecretCode += letters[actualShift]
        }
      }
      if (!letters.includes(lowerInput[i])) superSecretCode += lowerInput[i]
    }
    return superSecretCode
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

//if you have "abc", what would you look at next