console.log("1) Используя метод reduce, посчитайте сколько людей проголосовали.");

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

const totalVoters = voters.reduce((acc, current) => {
    if (current.voted) {
        return acc + 1;
    }
    return acc;
}, 0);

console.log(totalVoters);

console.log("2)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.");


const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalCost = wishlist.reduce((acc, current) => {
    return acc + current.price;
}, 0);

console.log(totalCost);


console.log("3)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершеннолетних и несовершеннолетних людей.");

const people = [
    { name: 'Alex', age: 16 },
    { name: 'Vlad', age: 25 },
    { name: 'Oleg', age: 16 },
    { name: 'Pavel', age: 15 },
    { name: 'Vitalij', age: 14 },
    { name: 'Max', age: 35 }
];

const ageCount = people.reduce((acc, current) => {
    if (current.age >= 18) {
        acc.adults += 1;

        acc.minors += 1;
    }
    return acc;
}, { adults: 0, minors: 0 });

console.log(ageCount);


console.log("4)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.");

const people1 = [
    { name: 'Alex', age: 16 },
    { name: 'Vlad', age: 40 },
    { name: 'Oleg', age: 16 },
    { name: 'Pavel', age:50 },
    { name: 'Vitalij', age: 14 },
    { name: 'Max', age: 35 }
];

const older30 = people1.filter(person => person.age > 30);

console.log(older30);

