const dateCipherModule = (function () {

  function dateCipher(input, date, encode = true) {
    if (!date || date.length !== 8) return false;
    const lowerInput = input.toLowerCase();
    let message = "";
    const cipher = "abcdefghijklmnopqrstuvwxyz";
    let dateShift = date;
    let counter = 1;
    let spaceCounter = 0;
    for (
      let i = 0, m = 0;
      i < lowerInput.length, m < lowerInput.length - spaceCounter;
      i++, m++
    ) {
      let cipherLetter = lowerInput[i];
      if (m >= date.length - 1 * counter) {
        date = date.concat(dateShift);
        counter++;
      }
      if (i <= date.length * counter) {
        let shift = date[m];
        shift = Number(shift) * counter;
        if (!encode) shift = -shift;
        for (let k = 0; k < cipher.length; k++) {
          if (cipherLetter === cipher[k]) {
            let newLetter = "";
            if (k + shift > 25) {
              let switchShift = k + shift;
              switch (true) {
                case switchShift > 25 && switchShift <= 50:
                  newLetter = cipher[k + shift - 25];
                  break;
                case switchShift > 50 && switchShift <= 76:
                  newLetter = cipher[k + shift - 51];
                  break;
                case switchShift > 76 && switchShift <= 101:
                  newLetter = cipher[k + shift - 76];
                  break;
                case switchShift > 101 && switchShift <= 126:
                  newLetter = cipher[k + shift - 101];
                  break;
                case switchShift > 126 && switchShift <= 151:
                  newLetter = cipher[k + shift - 126];
                  break;
                case switchShift > 151 && switchShift <= 176:
                  newLetter = cipher[k + shift - 151];
                  break;
                case switchShift > 176 && switchShift <= 201:
                  newLetter = cipher[k + shift - 176];
                  break;
                case switchShift > 201 && switchShift <= 226:
                  newLetter = cipher[k + shift - 201];
                  break;
                case switchShift > 226 && switchShift <= 251:
                  newLetter = cipher[k + shift - 226];
                  break;
                case switchShift > 251 && switchShift <= 276:
                  newLetter = cipher[k + shift - 251];
                  break;
                case switchShift > 276 && switchShift <= 301:
                  newLetter = cipher[k + shift - 276];
                  break;
                case switchShift > 301 && switchShift <= 326:
                  newLetter = cipher[k + shift - 301];
                  break;
                case switchShift > 326 && switchShift <= 351:
                  newLetter = cipher[k + shift - 326];
                  break;
                case switchShift > 351 && switchShift <= 376:
                  newLetter = cipher[k + shift - 351];
                  break;
                case switchShift > 376 && switchShift <= 401:
                  newLetter = cipher[k + shift - 376];
                  break;
                case switchShift > 401 && switchShift <= 426:
                  newLetter = cipher[k + shift - 401];
                  break;
                case switchShift > 426 && switchShift <= 451:
                  newLetter = cipher[k + shift - 426];
                  break;
                case switchShift > 451 && switchShift <= 476:
                  newLetter = cipher[k + shift - 451];
                  break;
                case switchShift > 476 && switchShift <= 501:
                  newLetter = cipher[k + shift - 476];
                  break;
                case switchShift > 501 && switchShift <= 526:
                  newLetter = cipher[k + shift - 501];
                  break;
                case switchShift > 526 && switchShift <= 551:
                  newLetter = cipher[k + shift - 526];
                  break;
                case switchShift > 551 && switchShift <= 576:
                  newLetter = cipher[k + shift - 551];
                  break;
                case switchShift > 576 && switchShift <= 601:
                  newLetter = cipher[k + shift - 576];
                  break;
                case switchShift > 601 && switchShift <= 626:
                  newLetter = cipher[k + shift - 601];
                  break;
                case switchShift > 626 && switchShift <= 651:
                  newLetter = cipher[k + shift - 626];
                  break;
              }
              message += newLetter;
              break;
            } else if (k + shift < 0) {
              let switchShift = k + shift;
              switch (true) {
                case switchShift < 0 && switchShift >= -25:
                  newLetter = cipher[k + shift + 25];
                  break;
                case switchShift < -25 && switchShift >= -51:
                  newLetter = cipher[k + shift + 51];
                  break;
                case switchShift < -51 && switchShift >= -76:
                  newLetter = cipher[k + shift + 76];
                  break;
                case switchShift < -76 && switchShift >= -101:
                  newLetter = cipher[k + shift + 101];
                  break;
                case switchShift < -101 && switchShift >= -126:
                  newLetter = cipher[k + shift + 126];
                  break;
                case switchShift < -126 && switchShift >= -151:
                  newLetter = cipher[k + shift + 151];
                  break;
                case switchShift < -151 && switchShift >= -176:
                  newLetter = cipher[k + shift + 176];
                  break;
                case switchShift < -176 && switchShift >= -201:
                  newLetter = cipher[k + shift + 201];
                  break;
                case switchShift < -201 && switchShift >= -226:
                  newLetter = cipher[k + shift + 226];
                  break;
                case switchShift < -226 && switchShift >= -251:
                  newLetter = cipher[k + shift + 251];
                  break;
                case switchShift < -251 && switchShift >= -276:
                  newLetter = cipher[k + shift + 276];
                  break;
                case switchShift < -276 && switchShift >= -301:
                  newLetter = cipher[k + shift + 301];
                  break;
                case switchShift < -301 && switchShift >= -326:
                  newLetter = cipher[k + shift + 326];
                  break;
                case switchShift < -326 && switchShift >= -351:
                  newLetter = cipher[k + shift + 351];
                  break;
                case switchShift < -351 && switchShift >= -376:
                  newLetter = cipher[k + shift + 376];
                  break;
                case switchShift < -376 && switchShift >= -401:
                  newLetter = cipher[k + shift + 401];
                  break;
                case switchShift < -401 && switchShift >= -426:
                  newLetter = cipher[k + shift + 426];
                  break;
                case switchShift < -426 && switchShift >= -451:
                  newLetter = cipher[k + shift + 451];
                  break;
                case switchShift < -451 && switchShift >= -476:
                  newLetter = cipher[k + shift + 476];
                  break;
                case switchShift < -476 && switchShift >= -501:
                  newLetter = cipher[k + shift + 501];
                  break;
                case switchShift < -501 && switchShift >= -526:
                  newLetter = cipher[k + shift + 526];
                  break;
                case switchShift < -526 && switchShift >= -551:
                  newLetter = cipher[k + shift + 551];
                  break;
                case switchShift < -551 && switchShift >= -576:
                  newLetter = cipher[k + shift + 576];
                  break;
                case switchShift < -576 && switchShift >= -601:
                  newLetter = cipher[k + shift + 601];
                  break;
                case switchShift < -601 && switchShift >= -626:
                  newLetter = cipher[k + shift + 626];
                  break;
                case switchShift < -626 && switchShift >= -651:
                  newLetter = cipher[k + shift + 651];
                  break;
              }
              message += newLetter;
              break;
            } else if (k + shift <= 25 && k + shift >= 0) {
              newLetter = cipher[k + shift];
              message += newLetter;
              break;
            }
          } else if (k === cipher.length - 1) {
            message += cipherLetter;
            m--;
            spaceCounter++;
            break;
          }
        }
      }
    }
    return message;
  }

return {
    dateCipher,
}
})();

module.exports = { dateCipher: dateCipherModule.dateCipher}
console.log(dateCipher("cleqksuzy qs kson", "04042018", false));
