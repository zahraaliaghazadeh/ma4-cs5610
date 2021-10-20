// Author: Zahra Ali Aghazadeh (Yalda)
// PROBLEM 1 - findBiggestNumber

/*
  findBiggestNumber
    search the input (map) for the biggest number
  input
    map, an array of array of integers, nulls or undefined
  output
    an integer representing the biggest number in int.  
    if there is no valid output, return undefined 
  note: I have provided some code within the function to help you out

*/
function findBiggestNumber(map) {

  const INDEX_OF_SECOND_ITEM = 1;
  // to check if array is empty or undefined
  if (map === undefined || map.length === 0) {
    return undefined
  }
  // initialize an array for all the largests
  let arrayOfLargests = [] 
  //  for loop through each array within the map array
  for (let i = 0; i < map.length; i++) {
    if (map[i] === undefined) {
      return undefined
    }
    // arrow function to sort in descending order
    arrayOfLargests[i] = map[i].sort((a, b) => b - a)[0]
  }
  // Sorting the array of largest
  arrayOfLargests.sort((a, b) => b - a)
  // note: there wont be duplicates in the arrayOfLargest array
  if (arrayOfLargests[0] === null) {
    return (arrayOfLargests[INDEX_OF_SECOND_ITEM])
  }
  return (arrayOfLargests[0]);
}

// PROBLEM 2 - balancedString

/*
  balancedString
    returns true if the number of all of the characters in the string
    is the same
    ex - balancedString("xxxyyzzz") => false
    ex - balancedString("abccbaabccba") => true
  input
    str, a string made of up 0 to infinite lower-case characters.  
    will never be undefined, null, etc.
  output
    true if the number of all the characters in the string is the same
    otherwise, false
*/

function balancedString(str) {
  // let myArr = str.split("")
  // let mySet = new Set(myArr)

  // let count = 0;
  // let myObj = {};
  // for(let j=0 ; j<myArr; j++){
  //   let charOfStr = str.charAt(i);
  //   if(myObj[charOfStr]){
  //     myObj[charOfStr]++;
  //   }else{
  //     myObj[charOfStr] = 1;
  //   }
  // }
  // console.log(myObj)
  // return myObj;
  var freq = {};
  for (var i = 0; i < str.length; i++) {
    var character = str.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
  // console.log(freq)
  // for (const value in object) {
  // Object.keys(obj).every((k) => !obj[k])
  //   return freq;
  // }
  let myArr = []

  for (const character in freq) {
    myArr.push(freq[character])
    // console.log(`${character}: ${freq[character]}`);
  }
  let sample = myArr[0]
  // let check = (myArr) => myArr.every(item => item === sample);
  // using the every method to check within object
  let check = myArr.every(item => item === sample);
  if (check) {
    return (true);
  } else {
    return (false);
  }

}

// PROBLEM 3 - additivePersistence

/*
  additivePersistence
    calculates and returns a number that represents how many loops you have to do 
    summing all of its digits until you get a single digit number
    explanation: https://mathworld.wolfram.com/AdditivePersistence.html
    ex - additivePersistence(1234) => 2
  input
    num, an integer between 1 and Number.POSITIVE_INFINITY
  output
    an integer as described above
*/
function additivePersistence(num) {
  // num = 1234
  let myStr = num.toString() // the string of num - "1234"
  let myStrArr = myStr.split("") // the array of string digits - ["1"."2","3","4"]
  let loopCount = 0;
  // let finalSum = 0;

  while (myStrArr.length > 1) {
    myStrArr = String(myStrArr.reduce(function (a, b) {
      return Number(a) + Number(b)
    })).split("");
    loopCount++;
  }

  // // for loop through the array of string digits
  // for(let i=0; i< myStrArr.length ; i++){
  //   finalSum += parseInt(myStrArr[i]) // 0 + 1 + 2 + 3 + 4
  //   loopCount ++;
  // }
  // while(!(finalSum < 10 && finalSum >=0 )){
  // }
  return(loopCount)
}


// TEST 1 - findBiggestNumber
const grid1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12]
]

const grid2 = [
  [1, 1, 4, 1],
  [1, 6],
  [1, 2, 1, -3],
]

const grid3 = [
  [1, null, 1, null],
  [1, 0],
  [1, 2, 1, undefined],
]

const grid4 = [
  [-1, null],
  [],
  [0, -2, -1],
]

const grid5 = [
  [],
  [],
  [],
]

console.assert(findBiggestNumber(grid1) === 12, "biggest number should be 12");
console.assert(findBiggestNumber(grid2) === 6, "biggest number should be 6");
console.assert(findBiggestNumber(grid3) === 2, "biggest number should be 2");
console.assert(findBiggestNumber(grid4) === 0, "biggest number should be 0");
console.assert(findBiggestNumber(grid5) === undefined, "biggest number response should be undefined");


// // TEST 2 - balancedString
console.assert(balancedString("xxxyyyzzz") === true, "'xxxyyyzzz' is balanced")
console.assert(balancedString("xxxyyyzzzz") === false, '"xxxyyyzzzz" is not balanced')
console.assert(balancedString("abccbaabccba") === true, '"abccbaabccba" is balanced')
console.assert(balancedString("abcdefghijklmnopqrstuvwxyz") === true, '"abcdefghijklmnopqrstuvwxyz" is balanced')
console.assert(balancedString("pqq") === false, '"pqq" is not balanced')
console.assert(balancedString("fdedfdeffeddefeeeefddf") === false, '"fdedfdeffeddefeeeefddf" is not balanced')
console.assert(balancedString("www") === true, '"www is balanced')
console.assert(balancedString("x") === true, '"x" is balanced')
console.assert(balancedString("") === true, "'' is balanced")


// // TEST 3 - additivePersistence
console.assert(additivePersistence(1234) === 2, 'the additive 1234 should be 2')
console.assert(additivePersistence(13) === 1, 'the additive 13 should be 1')
console.assert(additivePersistence(9876) === 2, 'the additive 9876 should be 2')
console.assert(additivePersistence(199) === 3, 'the additive 199 should be 3')
console.assert(additivePersistence(1679583) === 3, 'the additive 1679583 should be 3')

// console.log("code execution complete!")