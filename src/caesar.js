

const caesarModule = (function () {

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

