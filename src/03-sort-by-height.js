/**
 *
 *
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copiedArr = arr;
  const arrOfMinusOnes = [];
  let blankPlace;
  let counter = 0;
  for (let i = 0; i < copiedArr.length; i++) {
    if (copiedArr[i] === -1) {
      counter++;
    }
  }
  if (counter === copiedArr.length) {
    return copiedArr;
  }
  for (let i = 0; i < copiedArr.length; i++) {
    if (copiedArr[i] === -1) {
      arrOfMinusOnes.push(i);
    }
  }
  for (let i = 0; i < copiedArr.length; i++) {
    if (copiedArr[i] === -1) {
      copiedArr.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < copiedArr.length; i++) {
    for (let j = 0; j < copiedArr.length; j++) {
      if (copiedArr[i] < copiedArr[j]) {
        blankPlace = copiedArr[i];
        copiedArr[i] = copiedArr[j];
        copiedArr[j] = blankPlace;
      }
    }
  }
  for (let i = 0; i < arrOfMinusOnes.length; i++) {
    for (let j = 0; j < copiedArr.length; j++) {
      if (j === arrOfMinusOnes[i]) {
        copiedArr.splice(j, 0, -1);
      }
    }
  }
  return copiedArr;
}

module.exports = sortByHeight;
