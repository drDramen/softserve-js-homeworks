// ----------task-1----------
console.log('___task-1___');

const arrayTask1 = [2, 3, 4, 5];
let result1 = 1;
let result2 = 1;
let i = 0;

//Using for loop
for (let i = 0; i < arrayTask1.length; i++) {
  result1 *= arrayTask1[i];
}
console.log('Using for loop: ' + result1);

//Using while loop
while (i < arrayTask1.length) {
  result2 *= arrayTask1[i];
  i++;
}
console.log('Using while loop: ' + result2);

// ----------task-2----------
console.log('___task-2___');

for (let i = 0; i < 15; i++) {
  //--1st way--
  if (i % 2) {
    console.log(`${i} is odd`);
  } else {
    console.log(`${i} is even`);
  }

  //--2nd way--
  /**
   * let msg = i % 2 ? 'odd' : 'even';
   * console.log(`${i} is ${msg}`);
   */

  //--3rd way--
  /**
   * console.log(`${i} is ${i % 2 ? 'odd' : 'even'}`);
   */
}

// ----------task-3----------
console.log('___task-3___');

function randArray(k) {
  const array = [];

  const getRand = () => Math.floor(Math.random() * 500) + 1;

  while (k--) {
    array.push(getRand());
  }

  return array;
}

console.log(randArray(10));

// ----------task-4----------
console.log('___task-4___');

function raiseToDegree(
  a = prompt('Input number (must be an integer)'),
  b = prompt('Input degree (must be an integer)')
) {
  const tryAgain = () => {
    let isTryAgain = confirm('Do you want to try again?');

    if (!isTryAgain) {
      return console.log('task-4 canceled!');
    }

    return raiseToDegree();
  };

  if (a == null || b == null) return console.log('task-4 canceled!');

  a = typeof a == 'number' ? a : a.trim() || NaN;
  b = typeof b == 'number' ? b : b.trim() || NaN;

  if (isNaN(a) || isNaN(b)) {
    alert('Incorrect data. Try again!');
    return tryAgain();
  }

  if (a % 1 != 0 || b % 1 != 0) {
    alert('Input data must be an integers. Try again!');
    return tryAgain();
  }

  return a ** b;
}

console.log(raiseToDegree());
console.log(raiseToDegree(3, 4)); // 81

// ----------task-5----------
console.log('___task-5___');

function findMin() {
  const args = [...arguments];
  let min = Infinity;

  if (!args.length) return console.log('No arguments!');

  let isCorrect = !args.some((e) => e.trim == '' || isNaN(e));

  if (!isCorrect)
    return console.log(
      'One or all of the arguments cannot be converted to a number.'
    );

  //--1st way--
  min = Math.min.apply(null, args);

  //--2nd way--
  //min = args.sort((a, b) => a - b)[0];

  //--3rd way--
  // for (let i = 0; i < args.length; i++) {
  //   min = args[i] < min ? args[i] : min;
  // }

  return min;
}

const data = [12, 14, 4, -4, 0.2]; // => -4

console.log(findMin(...data));

// ----------task-6----------
console.log('___task-6___');

function findUnique(arr) {
  if (arr === undefined) return console.log('No arguments!');
  if (!Array.isArray(arr)) return console.log('Argument is nonarray!');
  if (!arr.length) return console.log('Array is empty!');

  //--1st way--
  arr.sort();

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }

  return true;

  //--2nd way--
  // return !arr.sort().some((e, i, a) => a[i] === a[i - 1]);

  //--3rd way, Not mine--
  // return arr.length === new Set(arr).size;
}


console.log(findUnique()); // => No arguments!
console.log(findUnique(5)); // => Argument is nonarray!
console.log(findUnique([])); // => Array is empty
console.log(findUnique([1, 2, 3, 5, 3])); // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true

// ----------task-7----------
console.log('___task-7___');

function lastElem(arr, count) {
  if (count == 0 || isNaN(count)) return arr[arr.length - 1];
  if (count >= arr.length) return arr;

  return arr.slice(-Math.abs(count));
}

console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

// ----------task-8----------
console.log('___task-8___');

function capitalToUpperCase(string) {
  if (typeof string != 'string' || string.trim() == '')
    return console.log('Incorrect data');

  return string
    .trim()
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}

console.log(capitalToUpperCase('i love java script')); // I Love Java Script
