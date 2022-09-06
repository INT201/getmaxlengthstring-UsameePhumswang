const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let a = []
  let Max = 0
  if(arrayOfString == null || arrayOfString == undefined){
    return undefined
  }
  for(b of arrayOfString){
    Max = b.length > Max ? b.length : Max
  }
  for(b of arrayOfString){
    if(b.length == Max){
      a.push(b)
    }
  }
  return a
}
module.exports = getMaxLengthString
