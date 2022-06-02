
function accum(str) {
  var letters = str.split('');
  //set variable to make easier to access the characters in the string parameter 
  var result = [];
  //empty array to push the looped characters from str.split into to return later
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  //loop the number of times as equal to length of characters in the string of the callback
  //make sure first character in each index of array is capitalized using letters[i].toUpperCase()
  //add to the array the corresponding character aligning to what character in the array is being targeted , and repeat same character the number of times the Array object attribute is being looped.
  return result.join('-');

  //after the results from the for loop is pushed into the empty array variable set as result, a second .join method is used to add the dash in between the set of groupings of strings being spat out
}

accum("RqaEzty")