// Playground
// Excercise 1
console.log("Excercise 1: a = 5, b = 5");
var a = 5;
var b = 5;
if (a === b) {
	console.log((a + b) * 3);
} else {
	console.log(a + b);
}
// Excercise 2
console.log("Excercise 2: a = 12");
a = 12;
if (a <= 19) {
	console.log(19 - a);
} else {
	console.log((a - 19) * 3);
}
// Excercise 3
console.log("Excercise 3: a = '66*'");
a = "66*";
function divideMaskNumber(numMasked, divisor) {
	var returnArr = [];
	var indexOfAstrsk = numMasked.indexOf("*");
	for (var i = 0; i <= 9; i++) {
		var testNum =
			numMasked.substring(0, indexOfAstrsk) +
			i +
			numMasked.substring(indexOfAstrsk + 1, numMasked.length);
		if (testNum % divisor === 0) returnArr.push(testNum);
	}
	return returnArr;
}
console.log(divisionMaskNumber(a, 3));
// Excercise 4
console.log("Excercise 4: a = '66*'");
console.log(divisionMaskNumber(a, 6));
