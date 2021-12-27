# Practical tasks 9

## **Task-1.** На HTML-сторінці є посилання `<a>`.

- у випадку коли, href починається на `https:/`/, потрібно додати посиланню атрибут `target="\_blank"`.

---

## **Task-2.** Для заданої сторінки:

- знайдіть всі `<h2>` з класом head;
- зробіть для них зелений колір фону;
- серед знайдених елементів знайдіть елементи з класом inner;
- і поставте їм розмір шрифту 35px;

**Код `HTML`-сторінки:**

    <h2 class="head">header1</h2>
    <h2 class="head">
      header2 <span class="inner">inner elem1</span>
    </h2>
    <h2>header3</h2>
    <h2 class="head">
      header4 <span>inner elem2</span>
    </h2>
    <h2>header5</h2>

---

## **Task-3.** Для заданої сторінки:

- знайдіть теги `<div>`, які стоять безпосередньо після `<h3>`;
- перемістіть кожен `<div>`-елемент так, щоб він став безпосередньо над `<h3>`;

**Код `HTML`-сторінки:**

    <h3>header1</h3>
    <div>text1</div>
    <h3>header2</h3>
    <div>text2</div>


---

## **Task-4.** На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який:

- після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними;