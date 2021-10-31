// Playground
/* 
Excercise 1
 */
console.log("Excercise 1: a = 5, b = 5");
var tripleSum = function (a, b) {
  return a === b ? (a + b) * 3 : a + b
};
console.log(tripleSum(5, 5));
/* 
Excercise 2
 */
console.log("Excercise 2: a = 12");
var tripleSubt = function (a) {
  return a <= 19 ? (19 - a) : (a - 19) * 3
};
console.log(tripleSubt(12));
/* 
Excercise 3
 */
console.log("Excercise 3: a = '66*'");
function divideMaskNumber(numMasked, divisor) {
  var returnArr = [];
  for (var i = 0; i <= 9; i++) {
    var testNum = +numMasked.replace("*", i);
    if (testNum % divisor === 0) returnArr.push(testNum);
  }
  return returnArr;
}
console.log(divideMaskNumber("66*", 3));
/* 
Excercise 4
 */
console.log("Excercise 4: a = '66*'");
console.log(divideMaskNumber("66*", 6));
