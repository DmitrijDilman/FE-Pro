// 1. Строки, числа, логические значения(boolean)
// Строки(string), числа(number) и логические значения(true / false) сохраняются в JSON без изменений.

// const obj = {
//     name: "Иван",
//     age: 25,
//     isStudent: true
// };

// const jsonString = JSON.stringify(obj);
// console.log(jsonString); // Вывод: {"name":"Иван","age":25,"isStudent":true}

// 2. Массивы
// Массивы в JavaScript преобразуются в массивы JSON, сохраняя все элементы. Если в массиве есть специальные типы данных (например, функции), они игнорируются.
// Пример:

// const array = [1, "текст", true, null];
// const jsonString = JSON.stringify(array);
// console.log(jsonString); // Вывод: [1,"текст",true,null]


// 3. Объекты
// Объекты JavaScript преобразуются в объекты JSON, где каждое свойство становится парой "ключ": "значение".
// Если объект содержит вложенные объекты или массивы, они также будут преобразованы в JSON.
// Пример:

// const person = {
//     name: "Иван",
//     address: {
//         city: "Москва",
//         zip: 12345
//     }
// };

// const jsonString = JSON.stringify(person);
// console.log(jsonString); // Вывод: {"name":"Иван","address":{"city":"Москва","zip":12345}}

// 4. null
// Значение null остается null при преобразовании в JSON.
// Пример:

// const obj = {
//     name: "Иван",
//     value: null
// };

// const jsonString = JSON.stringify(obj);
// console.log(jsonString); // Вывод: {"name":"Иван","value":null}


// 5. Функции и undefined
// Функции и значения undefined игнорируются и не сохраняются в JSON. Если они находятся в объекте, эти свойства просто пропускаются.
// Пример:

// const obj = {
//     name: "Иван",
//     sayHello: function() {
//         return "Привет!";
//     },
//     somethingUndefined: undefined
// };

// const jsonString = JSON.stringify(obj);
// console.log(jsonString); // Вывод: {"name":"Иван"}


// 6. Дата (Date)
// Объекты типа Date преобразуются в строки в формате даты.
// Пример:

// const obj = {
//     name: "Иван",
//     birthDate: new Date()
// };

// const jsonString = JSON.stringify(obj);
// console.log(jsonString); // Вывод: {"name":"Иван","birthDate":"2024-09-17T12:34:56.789Z"}


const myObject = {
    name: "Дмитрий",
    age: 53,
    hobbies: ["чтение", "Студия Звукозаписи"],
    isActive: true,
    address: {
        street: "Teststr.",
        city: "Augsburg",
        zip: "86156"
    },
    nullValue: null,

    sayHello: function () {
        return "Привет!";
    },
    Undefined: undefined

};

// Преобразуем объект в строку JSON
const jsonString = JSON.stringify(myObject);

// Сохраняем JSON-строку в localStorage
localStorage.setItem("myObject", jsonString);

// Извлекаем строку JSON из localStorage
const JsonString = localStorage.getItem("myObject");

// Преобразуем строку JSON обратно в объект
const parsedObject = JSON.parse(JsonString);

// Выводим объект в консоль
console.log(parsedObject);


---------------------------------------------------

const studentNameInput = document.querySelector('#studentName');
const subjectInput = document.querySelector('#subject');
const gradeInput = document.querySelector('#grade');
const saveButton = document.querySelector('#saveButton');
const loadButton = document.querySelector('#loadButton');
const gradeList = document.querySelector('#gradeList');


if (!localStorage.getItem('grades')) {
    localStorage.setItem('grades', '[]');
}

const grades = JSON.parse(localStorage.getItem('grades'));

function saveGrade() {
    const studentName = studentNameInput.value;
    const subject = subjectInput.value;
    const gradeValue = gradeInput.value;

    grades.push({ student: studentName, subject: subject, grade: gradeValue });

    localStorage.setItem('grades', JSON.stringify(grades));


    studentNameInput.value = '';
    subjectInput.value = '';
    gradeInput.value = '';
}


function loadGrades() {
    gradeList.innerHTML = '';
    grades.forEach((grade) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Студент: ${grade.student}, Предмет: ${grade.subject}, Оценка: ${grade.grade}`;
        gradeList.appendChild(listItem);
    });
}


saveButton.addEventListener('click', saveGrade);
loadButton.addEventListener('click', loadGrades);




