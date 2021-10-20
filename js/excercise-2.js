// Homework
// Excercise 1: Sum odd number in array
var arr = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

var sumOdd = function (inputArr) {
	return inputArr.reduce((acc, cur) => (cur % 2 === 0 ? acc : acc + cur));
};
console.log(sumOdd(arr));
// Excercise 2: Trim string
var str = "huynh Trung Hieu";
var trimLongStr = function (inputStr) {
	return inputStr.substring(0, 10) + (inputStr.length > 15 ? "..." : "");
};
console.log(trimLongStr(str));
// Excercise 3: Uppercase only first letter
var upperFisrt = function (inputStr) {
	return (
		inputStr[0].toUpperCase() +
		inputStr.substring(1, inputStr.length).toLowerCase()
	);
};
console.log(upperFisrt(str));
// Excercise 4: Get min number in aray
var minInArr = function (inputArr) {
	return inputArr.reduce((min, cur) => (cur <= min ? cur : min));
};
console.log(minInArr(arr));
// Excercise 5: Object
function Student(name, age, school) {
	this.name = name;
	this.age = age;
	this.school = school;
}
var stdArr = [
	new Student("John", 26, "Cambridge"),
	new Student("Mark", 30, "Oxford"),
	new Student("Bill", 28, "Havard"),
];
// Excercise 5.1
Student.prototype.coding = function () {
	if (this.age >= 28) {
		console.log("coding master");
	} else {
		console.log("learning code");
	}
};
stdArr[0].coding();
// Excercise 6: Find numbers appear in 2 array
var sameElement = function (inputArr1, inputArr2) {
	return inputArr1.filter((ele) => inputArr2.indexOf(ele) > -1);
};
var arr2 = [3, 6, 9, 12, 5, 55];
console.log(sameElement(arr, arr2));
// Excercise 7: Sum digits in number
var sumDigit = function (inputNum) {
	var sum = 0;
	var num = inputNum.valueOf();
	while (num > 0) {
		sum += num % 10;
		num = Math.floor(num / 10);
	}
	return sum;
};
console.log(sumDigit(12345));
