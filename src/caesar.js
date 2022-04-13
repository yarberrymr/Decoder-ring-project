// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //determine if shift is present or out of range
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //input to lowercase
    const lowerInput = input.toLowerCase();
    //loop through string
    if (!encode) {
      shift = -shift;
    }
    let message = "";
    for (let i = 0; i < lowerInput.length; i++) {
      //change letter by letter to new letter
      let ciphLetter = lowerInput[i];
      const cipher = "abcdefghijklmnopqrstuvwxyz";
      for (let j = 0; j < cipher.length; j++) {
        if (ciphLetter === cipher[j]) {
          //adjust for shifts that take the index out of the cipher range
          if (j + shift <= 25 && j + shift >= 0) {
            ciphLetter = cipher[j + shift];
            message += ciphLetter;
            break;
          } else if (j + shift < 0) {
            ciphLetter = cipher[26 + (j + shift)];
            message += ciphLetter;
            break;
          } else if (j + shift > 25) {
            ciphLetter = cipher[(j + shift) - 26];
            message += ciphLetter;
            break;
          }
          //keeps spaces and symbols as themselves and updates message appropriately
        } else if (j === cipher.length - 1) {
          message += ciphLetter;
          break;
        }
      }
    }
    //return completed message when loops are completed
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
