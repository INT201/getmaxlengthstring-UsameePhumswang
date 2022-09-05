const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let longestWord = ''
  for(let i = 0; i < arrayOfString.length; i++){
    let currentWord = arrayOfString[i]
  if(arrayOfString == null || arrayOfString == undefined){
    return undefined
  }else if(currentWord.length > longestWord.length){
      longestWord = arrayOfString[i]
    }
  }
  return longestWord
}
module.exports = getMaxLengthString

console.log(getMaxLengthString(['hi','hello']))
