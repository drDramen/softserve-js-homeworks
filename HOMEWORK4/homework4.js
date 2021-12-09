// ----------task-1----------
console.log('___task-1___');

function calcRectangleArea(width, height) {
  if (!(width > 0 && height > 0)) {
    throw new Error('Incorrect data');
  }

  return width * height;
}

let rectangleWidth = prompt('Input rectangle width');
let rectangleHeight = prompt('Input rectangle height', 5);
let rectangleArea = null;

try {
  rectangleArea = calcRectangleArea(rectangleWidth, rectangleHeight);
  console.log(rectangleArea);
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}

// ----------task-2----------
console.log('___task-2___');

function checkAge() {
  let age = prompt('How old are you?');
  let access = false;

  try {
    switch (true) {
      case age === '':
        throw new SyntaxError('The field is empty! Please enter your age!');
      case isNaN(age):
        throw new SyntaxError('The data entered is not a number!');
      case age > 0 && age < 14:
        throw new SyntaxError(`You're still young!`);
      case age <= 0:
        throw new SyntaxError(`The number must be greater than 0!`);
    }

    console.log('Access to watching the movie is allowed.');
    access = true;
  } catch (e) {
    alert(e.message);
    console.log(`${e.name}: ${e.message}`);
  } finally {
    return access;
  }
}

let access = checkAge();
console.log(`Access: ${access}`);

// ----------task-3----------
console.log('___task-3___');

class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jule',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (!(month >= 1 && month <= 12)) {
    throw new MonthException('Incorrect month number');
  }

  return months[month - 1];
}

let month = prompt('Enter the month number');

try {
  const monthStringValue = showMonthName(month);
  console.log(monthStringValue);
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}

// ----------task-4----------
console.log('___task-4___');

function showUser(id) {
  if (id < 0) { // null, '', NaN were not considered.
    throw new Error('ID must not be negative');
  }

  return {
    id: id,
  };
}

function showUsers(ids) {
  const outputUsers = [];

  ids.forEach((id) => {2
    
    try {
      outputUsers.push(showUser(id));
    } catch (e) {
      console.log(`${e.name}: ${e.message}: ${id}`);
    }
  });

  return outputUsers;
}

const correctUsers = showUsers([7, -12, 44, 22]);

console.log(JSON.stringify(correctUsers));
