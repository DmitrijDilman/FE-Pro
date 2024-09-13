// // sort

// const numbers =[0,2,1,10,15]

// // numbers.sort();
// // //  [0, 1, 10, 15, 2]
// // console.log(numbers);

// // comparison function

// //  a - b -> в порядке возрастания
// numbers.sort((a, b) => a - b); 

// // b - a -> в порядке убывания
// numbers.sort((a, b) => b - a);

// // console.log(numbers);

// const products =[
//     {id: 1, title: "table", price: 100},
//     {id: 2, title: "pc", price: 3000},
//     {id: 3, title: "book", price: 20},
//     {id: 4, title: "bag", price: 300},
// ];

// products.sort((a,b) => a.price - b.price);
// // console.log(products);

// // [5,6,1,2] => 1+2 = 3
// // [1,2,5,6]

// // filter
// function sum(numbers) {
//     numbers.sort((a,b) => a - b);
//     const positiveNums = numbers.filter((element) =>
//         element > 0);
//     // return numbers[0] + numbers[1]
//     return positiveNums[0] + positiveNums[1]

// }
// // console.log(sum([1,2,4,-5,2]));

// const name = "Roza";

// // console.log(name.length);

// ["Roza", "Misha", "Joe", "Oleg"];
// // sort

// // reduce

// const nums = [-5,6,2,-5,4,3,-3,-10];

// //                        6  +   2
// //                        8  +   4   
// //                        12 +   3  => 15
// //                        15
// const sum = nums.reduce((acc, current) => acc + current);

// //                                6    2
// //                                8    -5
// //                                 8
// const positiveSum = nums.reduce((acc, current) => {
//     if(current > 0) {
//         return acc + current
//     }
//     return acc;
// }, 0)
// console.log(positiveSum);

const nums = [-5,6,2,-5,4,3,-3,-10];

const max = nums.reduce((acc, current) => {
    if(acc > current) {
        return acc;
    }
    return current;
})
//                        ternary operator
const maxNumber = nums.reduce((acc, current) => acc > current ? acc : current); 

// console.log(max);

const products =[
    {id: 1, title: "table", price: 100, marks: [2,3,4,2]},
    {id: 2, title: "pc", price: 3000, marks: [2,5,5,4]},
    {id: 3, title: "book", price: 20, marks: [3,3,4,4]},
    {id: 4, title: "bag", price: 300,marks: [1,2,3,2]},
];

// {id: 1, title: "table", price: 100, maxMark: 4}
// forEach, reduce
// delete object.key

products.forEach((object) => {
    object.maxMark = object.marks.reduce((acc, cur) => acc > cur ? acc : cur)
    delete object.marks;
})

console.log(products);











