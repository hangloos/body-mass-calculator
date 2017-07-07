// palandrum. same forward as it is backwards. level 
// 

// 1 - function palandrumChecker(string) {
//   return string.split("").reverse().join("") === string
// }


// palandrumChecker('level')
// palandrumChecker('leval')


// 2 two paramaters. how many times the character is there. 

// function check (letter, string) {
// var count = 0
// for(var i = 0; i < string.length; i++){
//   if(string[i] === letter){
//     count += 1
//   }
// }
// return count

// }


//3 - array a bunch of numbers. one is duplicate. how to find the duplicate. 

// var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,4,14,15,16,17,3,18,19,20,21,22]

// function duplicate(array) {
//   var hash = {}
//   dup = []

//   for(var i = 0; i < array.length; i++){
//     if (hash[array[i]]){
//       dup.push(array[i])
//     } else {
//       hash[array[i]] = 1
//     }
//   }

//   return dup
  
// }

// duplicate(array)


// 12258 - translate that number to a string 
// 1 - a, 2 - b, 12 - i, 26 - z
// 12 could be ab or could be l
// it cant be greater than 26 and less than 1
// abbeh  ( 1 , 2, 2, 5, 8)
//aveh  ( 1 , 22, 5, 8)
//abyh ( 1, 2, 25, 8)
//lbeh ( 12, 2, 5, 8)
//lyh ( 12, 25, 8 )

// segment to single 
// keep one single
var alphHash = {
  1: 'a',2: 'b',3: 'c',4: 'd',5: 'e',6: 'f',7: 'g',8: 'h',9: 'i',10: 'j',11: 'k',12: 'l',13: 'm',14: 'n',15: 'o',16: 'p',17: 'q',18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z'}

function hashCalc(number){

var numberChoices = []
var numberArray = ("" + number).split("")
var outcomes = []


for (var i = 0; i < numberArray.length; i++){
  debugger
var currentArray = []
currentArray.push(numberArray[i])
  
  for(var j = i + 1; j < numberArray.length; j++){
    currentArray.push(numberArray[j])
  }

numberChoices.push(currentArray)
}


}

hashCalc(12258)























