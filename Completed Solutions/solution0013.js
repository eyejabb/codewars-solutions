// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str)
    {
        // Convert the string in lower case letters
        str = str.toLowerCase();
        let len = str.length;
  
        let arr = str.split('');
  
        arr.sort();
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] == arr[i + 1])
                return false;
        }
        return true;
    }