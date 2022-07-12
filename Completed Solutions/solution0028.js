// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:

// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

function SeriesSum(n) {
    let result = 0;
    let leverage = 1;
//Two seperate variables as integers, so why reverage?

    for (let i = 0; i < n; i += 1){
//So, run loop fed parameter number of times
      if (i === 0) {
        result = 1;
      } else {
        leverage += 3;
        result = result + (1 / leverage);
      }
      //So far, *else* conditional 'leverage' is equal to 1.25
    }
    return result.toFixed(2);
    //Remember that method.toFixed(n) is equal to the number of decimal places.
  };
