# Practical tasks 5

## **Task-1.** Напишіть функцію `propsCount(currentObject)`, яка:

- приймає об’єкт;
- визначає кількість властивостей цього об’єкта;

**For example:**

    let mentor = {
      course: "JS fundamental",
      duration: 3,
      direction: "web-development"
    };

**Результат має бути 3.**

    propsCount(mentor);  // 3

---

## **Task-2.**

- Створіть довільний об’єкт, який має 5 полів;
- Необхідно написати функцію `showProps(obj)`, яка:
  - приймає даний об’єкт;
  - виводить список його властивостей записаних в масив;
  - виведіть також масив значень властивостей об’єкта.

---

## **Task-3.** Створіть клас `Person`, в якого:

- конструктор приймає параметри _`name`_ і _`surname`_;
- міститься метод `showFullName()`, який виводить ім’я і прізвище особи;
- від класу `Person` наслідується клас `Student`:
  - конструктор якого крім _`name`_ і _`surname`_, приймає параметр _`year`_ (рік вступу до університету);
  - необхідно перевизначити метод `showFullName(midleName)`, щоб виводилося не лише ім’я, прізвище, але і по-батькові (_`midleName`_) студента;
  - необхідно реалізувати метод `showCourse()`, який:
    - виводитиме поточний курс студента (від 1 до 6);
    - значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.

**For example:**

    const stud1 = new Student("Petro", "Petrenko", 2015);
    console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
    console.log("Current course: " + stud1.showCourse()); //Current course: 6

---

## **Task-4.** Створіть клас `Worker`, який:

0.  буде мати конструктор, який приймає наступні властивості:

    - _`fullName`_ (ім’я і прізвище);
    - _`dayRate`_ (ставка за день роботи);
    - _`workingDays`_ (кількість відпрацьованих днів);

1.  клас повинен мати метод `showSalary()`, який:

    - буде виводити зарплату працівника;

    > **Зарплата** - це добуток ставки _`dayRate`_ на кількість відпрацьованих днів _`workingDays`_.

2.  додати приватне поле _`experience`_:

    - присвоїти йому значення 1.2;
    - використовувати його як додатковий множник при визначенні зарплати – створити метод `showSalaryWithExperience()`;
    - вивести значення зарплати з цим коефіцієнтом;

3.  додати гетери і сетери для поля _`experience`_:

    - встановити значення _`experience`_ = 1.5;
    - вивести його на екран;

4.  вивести значення зарплати з новим _`experience`_;

5.  Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
    - Посортувати зарплату працівників із найбільшим experience по зростанню;
    - вивести результат в форматі: `worker_fullName: salary_value`;

6. Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

**Example usage:**

    let worker1 = new Worker("John Johnson", 20, 23);
    console.log(worker1.fullName);
    worker1.showSalary();
    console.log("New experience: " + worker1.showExp);
    worker1.showSalaryWithExperience();
    worker1.setExp = 1.5;
    console.log("New experience: " + worker1.showExp);
    worker1.showSalaryWithExperience();

    let worker2 = new Worker("Tom Tomson", 48, 22);
    . . . . . .

    let worker3 = new Worker("Andy Ander", 29, 23);
    . . . . . .

**Output example:**

    John Johnson
    John Johnson salary: 460
    New experience: 1.2
    John Johnson salary: 552
    New experience: 1.5
    John Johnson salary: 690

    Tom Tomson
    Tom Tomson salary: 1056
    . . . . . .

    Andy Ander
    Andy Ander salary: 667
    . . . . . .

    Sorted salary:
    John Johnson: 690
    Andy Ander: 1000.5
    Tom Tomson: 1584

---

## **Task-5.** Створіть батьківський клас `GeometricFigure`, який:

- має порожній метод для визначення площі `getArea()`;
- метод `toString()` для виведення назви класу;

### Створіть 3 класи нащадки `Triangle`, `Square` і `Circle`, які:

- наслідуються від класу `GeometricFigure`;
- кожен з дочірніх класів має свою реалізацію методу `getArea()`, для визначення площі фігури;
- в конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r;

### Створіть зовнішню функцію `handleFigures(figures)`, яка:

- прийматиме масив об’єктів дочірніх класів _`figures`_;
- перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування;
- виводитиме назву створеного об’єкту відповідної фігури;
- розраховану площу фігури;
- сумарну площу всіх фігур;

> Для реалізації функції можете використати метод `reduce()`.

**For example:**

    class GeometricFigure {
      getArea() {
        return 0;
      }

      toString() {
        return Object.getPrototypeOf(this).constructor.name;
      }
    }
      Your code . . .

    const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
    console.log(handleFigures(figures));

**Output example:**

    Geometric figure: Triangle - area: 10
    Geometric figure: Square - area: 49
    Geometric figure: Circle - area: 78.53981633974483
    137.53981633974485 // total area

---
