// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

//Need to assign each character of the alphabet, maybe you use a for loop to loop through the number of integers in the array, and concatenate the number corresponding with the character 

// var number=function(array){
//   //your awesome code here
//   for(let i = 1; i === array.length; i++){
//     console.log(array[i])
//   }
// }

var number = function(arr) {
  var newArr = [];
    if (arr.length === 0) {
      return [];
    } else {
      for (var i = 0, len = arr.length; i < len; i += 1) {
        newArr.push((i + 1) + ': ' + arr[i]);
      }
    }
    return newArr;
  }