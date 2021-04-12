/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  const nToString = String(n).split('');
  for (let i = 0; i < nToString.length; i++) {
    sum += (+nToString[i]);
  }
  if (sum < 10) return sum;
  const newN = sum;
  return getSumOfDigits(newN);
}

module.exports = getSumOfDigits;
