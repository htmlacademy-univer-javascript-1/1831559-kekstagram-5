function isStringLengthValid(inputstring, maxLen) {
  return inputstring.length <= maxLen;
}

function isPalindrome(string) {
  const normalizedInput = string.replace(/\s+/g, "").toLowerCase();
  const invertedInput = normalizedInput.split("").reverse().join("");

  return invertedInput === normalizedInput;
}

function extractDigits(input) {
  const stringifiedInput = input.toString();
  const digits = stringifiedInput.match(/\d/g)?.join("");

  return parseInt(digits, 10);
}


