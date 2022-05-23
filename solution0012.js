// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  // Go for it
  let backwordsString = "";
  for (let i = str.length - 1; i >= 0; i--){
  backwordsString += str[i];
  }
  return backwordsString.split(" ").reverse().join(" ");
}

reverseWords('double  spaced  words')

function reverseWords(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr.split(" ").reverse().join(" ");
}