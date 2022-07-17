// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


//e says, 'basically return string with double characters for each parameter input'
function doubleChar(str) {
    return [...str].map(s => s.repeat(2)).join('')
  }