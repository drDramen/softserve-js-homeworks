# Practical tasks 10

## **Task-1.** Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях:

**Вихідний код:**

    let arr = ["Tom", "Sam", "Ray", "Bob"];
    let [/* Ваш код */] = arr;
    console.log(x); // "Tom"
    console.log(y); // "Sam"
    console.log(z); // [Bob]

---

## **Task-2.** Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях:

**Вихідний код:**

    let data = {
      names: ["Sam", "Tom", "Ray", "Bob"],
      ages: [20, 24, 22, 26],
    };
    let /* Ваш код */ = data;
    console.log(name2); // "Tom"
    console.log(age2); // 24
    console.log(name4); // "Bob"
    console.log(age4); // 26

---

## **Task-3.** Напишіть функцію `mul()`, яка:

- приймає будь-яку кількість параметрів різного типу;
- повертає добуток параметрів типу `Number`;
- якщо параметри типу `Number` відсутні, повертає число 0;
- не можна використовувати властивість `arguments`, але в функцію `mul()` можна додати один параметр

**Вихідний код:**

    function mul() {
      // Ваш код
    }
    console.log(mul(1, "str", 2, 3, true)); // 6
    console.log(mul(null, "str", false, true)); // 0

---

## **Task-4.** Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи `bind()`:

**Вихідний код:**

    let server = {
      data: 0,
      convertToString: function (callback) {
          callback((function () {
            return this.data + "";
          }).bind(this));
      }
    };
    let client = {
      server: server,
      result: "",
      calc: function (data) {
          this.server.data = data;
          this.server.convertToString(this.notification());
      },
      notification: function () {
          return (function (callback) {
            this.result = callback();
          }).bind(this);
      }
    };
    client.calc(123);
    console.log(client.result); // "123"
    console.log(typeof client.result); // "string"

---

## **Task-5.** Напишіть функцію `mapBuilder (keysArray, valuesArray)`, яка:

- приймає два масиви однакової довжини;
- використовуючи ці масиви, функція повинна створювати об'єкт типу `Map`:
  - ключами якого є значення з першого масиву;
  - значеннями `Map` - значення з другого масиву;
- після цього функція повертає даний об'єкт `Map`;

**Приклади використання функції:**

    let keys = [1, 2, 3, 4];
    let values = ["div", "span", "b", "i"];
    let map = mapBuilder(keys, values);
    console.log(map.size); // 4
    console.log(map.get(2)); // "span"
