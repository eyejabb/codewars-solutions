

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
