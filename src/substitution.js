// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //validate alphabet presence and length
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    //validate alphabet for no repeating characters
      for (let i=0; i<alphabet.length; i++) {
        if ( alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i]) ) {
          return false;
        }
      }
      cipher = "abcdefghijklmnopqrstuvwxyz"
      //make input lowercase and split by spaces if any exist
      const lowerInput = input.toLowerCase();
      let splitInput = lowerInput.split(" ");
      let cipherArray = [];
      //loop through new array of words
      for (let i = 0; i < splitInput.length; i++) {
        let word = splitInput[i];
        let message = "";
        let cipherLetter = "";
        //loop through word by letter to find matching letter in cipher string
        for (let j = 0; j < word.length; j++) {
          let letter = word[j];
          if(encode) {
          for (let k = 0; k < cipher.length; k++) {
            //when matching letter is found, update the message with the new letter from substitution alphabet
            if (cipher[k] === letter) {
              cipherLetter = alphabet[k];
              message += cipherLetter;
              break;
            }
          }
        }
        if(!encode) {
          for (let k = 0; k < alphabet.length; k++) {
            //when matching letter is found, update message with matching letter from cipher string
            if (alphabet[k] === letter) {
              cipherLetter = cipher[k];
              message += cipherLetter;
              break;
            }
          }
        }
        //oush new message to array
          if (j === word.length - 1) {
            cipherArray.push(message);
          }
        }
      }
      //join all words in array with spaces if any are needed and return the string
      return cipherArray.join(" ");
    }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
