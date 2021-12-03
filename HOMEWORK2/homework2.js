// task-1
console.log('___task-1___');

let x = 1;
let y = 2;

let res1 = String(x) + y;
let res2 = String(!!x) + y;
let res3 = !!x || y;
let res4 = parseInt(!(x + y));

console.log(res1); // "12"
console.log(typeof res1); // "string"
console.log(res2); // "true2"
console.log(typeof res2); // "string"
console.log(res3); // true
console.log(typeof res3); // "boolean"
console.log(res4); // NaN
console.log(typeof res4); // "number"

// task-2
console.log('___task-2___');

let inputData = prompt('Enter the number!');

console.log('Input data: ' + inputData);
if (inputData != '' && inputData != null && !isNaN(inputData)) {
  if (inputData % 2 === 0 && inputData > 0) {
    console.log('The number is positive and even !');
  } else {
    console.log("The number isn't positive or even !");
  }
  if (inputData % 7 === 0) {
    console.log('The number is multiple of seven !');
  } else {
    console.log("The number isn't multiple of 7 !");
  }
} else {
  console.log('Input data is wrong ! (not Number)');
}

// task-3
console.log('___task-3___');

let testArray = [];

testArray[0] = 21;
testArray[1] = 'React JS';
testArray[2] = true;
testArray[3] = null;
console.log('testArray length: ' + testArray.length);

testArray[4] = prompt('Enter something!', 'I will work at Softserve.');
console.log('The 5th element of the testArray: ' + testArray[4]);

testArray.shift();
console.log(testArray);

// task-4
console.log('___task-4___');

let cities = ['Rome', 'Lviv', 'Warsaw'];
let result = cities.join('*');

console.log('Initial array: ', cities);
console.log('result: ' + result);

// task-5
console.log('___task-5___');

let isAdult = prompt('How old are you?');
let answer = null;

//isAdult != '' && isAdult != null && !isNaN(inputData) &&

if (isAdult > 0) {
  answer = isAdult >= 18 ? 'You are an adult.' : "You're still too young.";
} else {
  answer = 'Input data is wrong ! (it must be a positive number)';
}

console.log(answer);

// task-6
console.log('___task-6___');

const triangle = [];
let square = null;
let isRectangular = false;
let isCorrect = false;

triangle.push(+prompt('Enter the length of the triangle side. a ='));
triangle.push(+prompt('Enter the length of the triangle side. b ='));
triangle.push(+prompt('Enter the length of the triangle side. c ='));

triangle.sort((a, b) => a - b);
isCorrect = triangle[0] + triangle[1] > triangle[2];

// isCorrect = triangle.every((item) => typeof item == 'number') && triangle[0] + triangle[1] > triangle[2];

//isCorrect = !triangle.some((item) => isNaN(item)) && triangle[0] + triangle[1] > triangle[2];

if (isCorrect) {
  let halfPerimetr =
    triangle.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    ) / 2;

  square = Math.sqrt(
    triangle.reduce((previousValue, currentValue) => {
      return previousValue * (halfPerimetr - currentValue);
    }, halfPerimetr)
  ).toFixed(3);

  isRectangular =
    (triangle[2] ** 2).toFixed(2) ===
    (triangle[0] ** 2 + triangle[1] ** 2).toFixed(2);

  console.log('Square of a triangle: ' + square);
  console.log('Triangle is rectangular?: ' + isRectangular);
} else {
  console.log('Incorrect data');
}

// task-7
console.log('___task-7___');

let currentTime = new Date().getHours();
const msg = ['Good night', 'Good morning', 'Good afternoon', 'Good evening'];

console.log('Current Time:' + currentTime);

// first way
console.log('Using multiple if...else statements.');

if (currentTime >= 23 || currentTime < 5) {
  console.log(msg[0]);
} else if (currentTime >= 5 && currentTime < 11) {
  console.log(msg[1]);
} else if (currentTime >= 11 && currentTime < 17) {
  console.log(msg[2]);
} else {
  console.log(msg[3]);
}

// second way
console.log('Using a switch statement.');

switch (true) {
  case currentTime >= 23 || currentTime < 5:
    console.log(msg[0]);
    break;
  case currentTime >= 5 && currentTime < 11:
    console.log(msg[1]);
    break;
  case currentTime >= 11 && currentTime < 17:
    console.log(msg[2]);
    break;
  default:
    console.log(msg[3]);
}
