// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

var min = function(list){
  var min =list[0];
  for(var i=0; i<list.length; i++){
     var cur = list[i];
     if (cur<min) min=cur;
  }
  return min;
}

var max = function(list){
  var max =list[0];
  for(var i=0; i<list.length; i++){
     var cur = list[i];
     if (cur>max) max=cur;
  }
  return max;
}