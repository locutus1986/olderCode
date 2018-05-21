function findDuplacateChar(str) {
  const dict = {};

  for(let char in str){
    if(str[char] in dict == 1){
      return str[char]
    }else{
      dict[str[char]] = 1
    }
  }
  return null;
}

// this was my first answer to the problem
  // const arrayOfChars = str.split("");
  //
  // for(let i = 1; i <= arrayOfChars.length; i++){
  //   for(let t = i-1; t >= 0; t--){
  //     if(arrayOfChars[i] == arrayOfChars[t]){
  //       const firstRepeat = arrayOfChars[t];
  //       return firstRepeat;
  //     }
  //   }
  // }
// }
console.log(findDuplacateChar("dbcaba"));
