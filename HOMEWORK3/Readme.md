# Practical tasks 3

## **Task-1.** Заданий масив з елементами:

    [2, 3, 4, 5]

- За допомогою циклу for знайдіть добуток елементів цього масиву;
- Також реалізуйте завдання через while;

---

## **Task-2.** Напишіть JavaScript for цикл, який буде:

- ітеруватися від 0 до 15;
- Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані;

**Sample Output:**

    "0 is even"
    "1 is odd"
    "2 is even"

---

## **Task-3.** Напишіть функцію `randArray(k)`, яка:

- заповнюватиме масив k випадковими цілими числами;
- випадкові числа генеруються із діапазону 1-500;

**Sample Output:**

    randArray(5);  // 399,310,232,379,40

---

## **Task-4.** Напишіть функцію `raiseToDegree(a,b)`, яка:

- повертає результат піднесення числа a до степеня b;
- функція працює тільки з цілими числами;
- реалізувати інтерфейс введення чисел a, b з клавіатури;

**Sample Output:**

    raiseToDegree(3, 4);  // 81

---

## **Task-5.** Реалізуйте функцію – `findMin()`, яка:

- повинна приймати довільну кількість числових аргументів;
- повертати той, який має найменше значення;

> Порада: для розв’язку можете скористатися спеціальним масивом `arguments`.

**Sample Output:**

    findMin(12, 14, 4, -4, 0.2); // => -4

---

## **Task-6.** Напишіть функцію `findUnique(arr)`, яка:

- приймає масив arr;
- перевіряє на унікальність його елементи;
- якщо всі елементи масиву унікальні (не мають дублів), то функція поверне `true`, інакше - `false`;

**Sample Output:**

    findUnique([1, 2, 3, 5, 3]);  // => false
    findUnique([1, 2, 3, 5, 11]); // => true

---

## **Task-7.** Напишіть функцію, яка:

- повертає останній елемент масиву;
- може приймати 2 параметра:
  - 1-ий масив;
  - 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести;

**Sample Output:**

    console.log(lastElem([3, 4, 10, -5]));      // -5
    console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
    console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

---

## **Task-8.** Напишіть функцію, яка:

- приймає рядок як параметр;
- перетворює першу букву кожного слова рядка в верхній регістр;

**Input string:**

    'i love java script'

**Output string:**

    'I Love Java Script'
