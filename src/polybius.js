// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    const coordinates = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    //make input lowercase and split by any spaces that exist
    const lowerInput = input.toLowerCase();
    let splitInput = lowerInput.split(" ");
    let cipherArray = [];
    if (encode) {
      //loop through split array of words
    for (let i = 0; i < splitInput.length; i++) {
      let word = splitInput[i];
      let message = "";
      let cipherLetter = "";
      //loop through word by letter
      for (let j = 0; j < word.length; j++) {
        let letter = word[j];
        //find matching letter and replace with coordinates of grid location
        for (let k = 0; k < alphabet.length; k++) {
          if (alphabet[k].includes(letter)) {
            cipherLetter = coordinates[k];
            message += cipherLetter;
            break;
          }
        }
        //push new message to array
        if (j === word.length - 1) {
          cipherArray.push(message);
        }
      }
    }
  }
  if (!encode) {
    //loop through coords in array and check if the length is even number
    for (let i = 0; i < splitInput.length; i++) {
      let coords = splitInput[i]
      if (coords.length % 2 !== 0) {
        return false;
      }
      let message = "";
      let cipherLetter = "";
      //loop through numbers in pairs
      for (let j = 0; j < coords.length; j += 2) {
        let coordinate = coords[j].concat(coords[j+1]);
        for (let k = 0; k < coordinates.length; k++) {
          //when matching coordinates are found, update message with matching letter from alphabet
          if (coordinates[k] === coordinate) {
            cipherLetter = alphabet[k];
            message += cipherLetter;
            break;
          }
        }
        //push the new message to an array
        if (j === coords.length - 2) {
          cipherArray.push(message);
          console.log(cipherArray)
        }
      }
    }
  }
  //join and return the new array with spaces if multiple words exist
    return cipherArray.join(" ");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
