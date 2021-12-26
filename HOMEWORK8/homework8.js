// ----------task-1----------
console.log('___task-1___');

function upperCase(str) {
  const regExp = /^\p{Lu}.*/gu;

  const response = regExp.test(str)
    ? `String's starts with uppercase character`
    : `String's not starts with uppercase character`;

  console.log(str + ': ' + response);
}

upperCase('regexp');
upperCase('RegExp');

// ----------task-2----------
console.log('___task-2___');

function checkEmail(str) {
  const regExp = /^\S+@\S+\.\S+$/g;

  const response = regExp.test(str);

  console.log(response);
}

let strTask2 = 'Qmail2@gmail.com';

console.log(`Для стрінги ${strTask2} результат:`);
checkEmail(strTask2);

// ----------task-3----------
console.log('___task-3___');

const regExp = /d(b+)(d)/i;

let strTask3 = 'cdbBdbsbz';

const response = strTask3.match(regExp);

console.log(`Для стрінги ${strTask3} результат:`);
console.log([...response]);

// ----------task-4----------
console.log('___task-4___');

// function swapSubStr(str) {
//   return str.split(' ').reverse().join(', ').trim();
// }

function swapSubStr(str) {
  return str.replace(/(\S+)\s(\S+)/, '$2, $1');
}

let strTask4 = 'Java Script';

console.log('Вхідний рядок: ' + strTask4);
console.log('Вихідний рядок: ' + swapSubStr(strTask4));

// ----------task-5----------
console.log('___task-5___');

function validationBankCard(str) {
  const regExp = /\d{4}(-\d{4}){3}/;

  const response = regExp.test(str);

  console.log(response);
}

let strTask5 = '9999-9999-9999-9999';

console.log(`Для картки \"${strTask5}\" результат:`);
validationBankCard(strTask5);

// ----------task-6----------
console.log('___task-6___');

function checkEmail(str) {
  const regExp = /^[A-Za-z0-9](\w|(-(?!-)))*@[A-Za-z0-9]+\.[A-Za-z0-9]+$/i;

  const response = regExp.test(str)
    ? `${str}: Email is correct!`
    : `${str}: Email is not correct!`;

  console.log(response);
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

// ----------task-7----------
console.log('___task-7___');

function checkLogin(str) {
  const regLogin = /^[A-Za-z](?:[A-Za-z]|(\d+(?:\.\d+)?))+$/;
  const regNumber = /\d+(\.\d+?)?/g;

  const isValid = str.length <= 10 && regLogin.test(str);

  const numbers = str.match(regNumber);

  console.log(isValid);
  console.log(numbers);
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
