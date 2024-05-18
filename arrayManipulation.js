function processArray(inputNumbers){
  var emptyArr = []
  for (var i=0;i<inputNumbers.length;i++){
    if(inputNumbers[i] %2 === 0){
      emptyArr.push(inputNumbers[i]*inputNumbers[i])
    }
    else{emptyArr.push(inputNumbers[i]*3)}
  }
  return emptyArr
}

//let kelly = processArray([1,2,3,4,5,6]);

//console.log(kelly)


function formatArrayStrings(strArr,emptyArr){
  if(strArr.length !== emptyArr.length){
    console.error("The length of both arrays must be the same");
    return;
  }
    
      let newformatStrings = [];
      for(let i = 0;i < strArr.length;i++){
        if(emptyArr[i]%2 === 0) {
          newformatStrings.push(strArr[i].toUpperCase())
        }else{
          newformatStrings.push(strArr[i].toLowerCase())
        }
      }
  return newformatStrings
}

export {processArray,formatArrayStrings};