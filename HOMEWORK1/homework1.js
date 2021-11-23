//task2

console.log('Palchyn');

//task3

let v1, v2;

v1 = 5;
v2 = 'JavaScript';

document.write('<p>First variable: ' + v1 + '</p>');
document.write('<p>Second variable: ' + v2 + '</p>');

v1 = v2;

document.write('<p>First variable: ' + v1 + '</p>');
document.write('<p>Second variable: ' + v2 + '</p>');

//task4

const person = {
    name: 'Vova',
    age: 36,
    isMarried: true,
    address: null,
    company: undefined
};

//task5

let isAdult = confirm('Are you an adult?');

console.log(isAdult);

//task6

let myName, myLastname, myGroup, myYearOfAge;

myName = 'Volodymyr';
myLastname = 'Palchyn';
myGroup = 'Lv-654';
myYearOfAge = 1985;

let isMarried = true;

console.log(myYearOfAge, isMarried, myName, myLastname, myGroup);

let address = null,
    company;

console.log(typeof address);
console.log(typeof company);

//task7

let login = prompt('Enter the login', 'User'),
    email = prompt('Enter your email', 'email@user.com'),
    password = prompt('Enter the password', 'password');

document.write(
    '<p>Dear <strong>' +
        login +
        '</strong>, your email is <strong>' +
        email +
        '</strong>, your password is <strong>' +
        password +
        '</strong></p>'
);

//task8

const secondsInminute = 60;

let secondsInhour, secondsInDay, secondsInMonth;

secondsInhour = secondsInminute * 60;
secondsInDay = secondsInhour * 24;
secondsInMonth = secondsInDay * 30;

document.write('<p> Seconds in hour: ' + secondsInhour + '</p>');
document.write('<p> Seconds in day: ' + secondsInDay + '</p>');
document.write('<p> Seconds in month: ' + secondsInMonth + '</p>');
