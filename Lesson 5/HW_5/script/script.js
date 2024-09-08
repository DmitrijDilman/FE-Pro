console.log("Задачи на map: \n 1) Увеличить возраст всех людей на 5 лет");

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const People_age = people.map(person => {
    return {
        ...person,
        age: person.age + 5
    };
});

console.log(People_age);

console.log("\n");

console.log("2) Получить массив, где только имена (строки), из массива объектов");

const names = people.map(person => person.name);
console.log(names);

console.log("\n");

console.log("Задачи на filter: \n 1) Отфильтровать массив объектов, чтобы оставить только те, у кого возраст больше 18 лет");

const people2 = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 15 }
];

const age = people2.filter(person => person.age > 18);
console.log(age);

console.log("\n");

console.log("2) Отфильтровать массив объектов, чтобы оставить только тех, кто проголосовал");

const people3 = [
    { name: 'Alice', voted: true },
    { name: 'Bob', voted: false },
    { name: 'Charlie', voted: true },
    { name: 'Dave', voted: false }
];

const voted = people3.filter(person => person.voted);
console.log(voted);

console.log("\n");

console.log("3) Отфильтровать массив студентов, чтобы оставить только тех, у кого оценка выше 70");

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 62 },
    { name: 'Charlie', grade: 74 },
    { name: 'Dave', grade: 55 }
];

const grade = students.filter(student => student.grade > 70);
console.log(grade);

console.log("\n");


console.log("Задачи на forEach:\nПройтись по массиву объектов и добавить каждому объекту новое свойство discountedPrice, которое будет равно price * 0.9");

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];

products.forEach(product => {
    product.discountedPrice = product.price * 0.9;
});

console.log(products);
