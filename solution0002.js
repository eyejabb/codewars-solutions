function removeExclamationMarks(s) {
  var result = "";
  var arrStr = s.split("");
  for (var i = 0; i < arrStr.length; i++) {
    if (arrStr[i] == "!") {
      arrStr[i] = '';
    }
  }
  for (var j = 0; j < arrStr.length; j++) {
    result += arrStr[j];
  }
  return result;
}