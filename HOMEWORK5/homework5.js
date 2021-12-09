// ----------task-1----------
console.log('___task-1___');

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

const mentor = {
  course: 'JS fundamental',
  duration: 3,
  direction: 'web-development',
};

console.log(`Props count: ${propsCount(mentor)}`);

// ----------task-2----------
console.log('___task-2___');

const student = {
  name: 'Volodymyr',
  surname: 'Palchyn',
  city: 'Khmelnytskyi',
  experience: 5,
  course: 'JS fundamental',
};

function showProps(obj) {
  return { propsList: Object.keys(obj), valuesList: Object.values(obj) };
}

const { propsList, valuesList } = showProps(student);

console.log(`Props list:`);
console.log(propsList);
console.log(`Values List:`);
console.log(valuesList);

// ----------task-3----------
console.log('___task-3___');

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    // return `${this.name} ${this.surname} ${midleName}`;
    return `${super.showFullName()} ${midleName}`;
  }

  showCourse() {
    let course = new Date().getFullYear() - this.year;

    if (course < 1 || course > 6) {
      console.log("Student doesn't study");

      return null;
    }

    return course;
  }
}

const stud1 = new Student('Petro', 'Petrenko', 2011);
console.log(stud1.showFullName('Petrovych')); // Petrenko Petro Petrovych
console.log('Current course: ' + stud1.showCourse()); //Current course: 6

// ----------task-4----------
console.log('___task-4___');

// const instancesOfWorker = [];
class Worker {
  static instancesOfWorker = [];
  static sortedSalary() {
    this.instancesOfWorker.sort(
      (a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience()
    );
  }

  static printSoretedSalary() {
    console.log('Sorted salary:');
    this.instancesOfWorker.forEach((w) => {
      console.log(`${w.fullName}: ${w.showSalaryWithExperience()}`);
    });
  }

  _experience = 1.2;

  set setExp(value) {
    if (value < 0) throw new Error('Experience must be positive');

    this._experience = value;
    Object.getPrototypeOf(this).constructor.sortedSalary();
  }

  get showExp() {
    return this._experience;
  }

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;

    Object.getPrototypeOf(this).constructor.instancesOfWorker.push(this);
  }

  set dayRate(value) {
    this._dayRate = value;
    Object.getPrototypeOf(this).constructor.sortedSalary();
  }

  get dayRate() {
    return this._dayRate;
  }

  set workingDays(value) {
    this._workingDays = value;
    Object.getPrototypeOf(this).constructor.sortedSalary();
  }

  get workingDays() {
    return this._workingDays;
  }

  showSalary() {
    return this._dayRate * this._workingDays;
  }

  showSalaryWithExperience() {
    return this.showSalary() * this._experience;
  }
}

let worker1 = new Worker('John Johnson', 20, 23);
console.log(worker1.fullName);
console.log(`Salary: ${worker1.showSalary()}`);
console.log('Experience: ' + worker1.showExp);
console.log(`Salary with experience: ${worker1.showSalaryWithExperience()}`);
worker1.setExp = 1.5;
console.log('New experience: ' + worker1.showExp);
console.log(`Salary with experience: ${worker1.showSalaryWithExperience()}`);
console.log('');

let worker2 = new Worker('Tom Tomson', 48, 22);
console.log(worker2.fullName);
console.log(`Salary: ${worker2.showSalary()}`);
console.log('Experience: ' + worker2.showExp);
console.log(`Salary with experience: ${worker2.showSalaryWithExperience()}`);
worker2.setExp = 1.5;
console.log('New experience: ' + worker2.showExp);
console.log(`Salary with experience: ${worker2.showSalaryWithExperience()}`);
console.log('');

let worker3 = new Worker('Andy Ander', 29, 23);
console.log(worker3.fullName);
console.log(`Salary: ${worker3.showSalary()}`);
console.log('Experience: ' + worker3.showExp);
console.log(`Salary with experience: ${worker3.showSalaryWithExperience()}`);
worker3.setExp = 1.5;
console.log('New experience: ' + worker3.showExp);
console.log(`Salary with experience: ${worker3.showSalaryWithExperience()}`);

console.log('');

Worker.printSoretedSalary();

// ----------task-5----------
console.log('___task-5___');

class GeometricFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  getArea() {
    return (this.base * this.height) / 2;
  }
}

class Square extends GeometricFigure {
  constructor(width) {
    super();
    this.width = width;
  }
  getArea() {
    return this.width * this.width;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

function handleFigures(figures) {
  return figures.reduce((previous, current) => {
    let area = 0;

    try {
      if (!(current instanceof GeometricFigure)) {
        throw new Error("The object doesn't belong to the parent class");
      }

      area = current.getArea();

      console.log(`Geometric figure: ${current.toString()} - area: ${area}`);

      // return previous + area;
    } catch (e) {
      console.error(e.message);
    }

    return previous + area;
  }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(`Total area: ${handleFigures(figures)}`);
