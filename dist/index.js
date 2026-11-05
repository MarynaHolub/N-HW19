"use strict";
// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.
const sumEvenNumbers = (arr) => {
    return arr.filter((item) => item % 2 === 0).reduce((acc, cur) => acc + cur, 0);
};
console.log(sumEvenNumbers([2, 3, 4, 5]));
const stringToBooleanFunction = (text) => {
    return text.trim().length > 0;
};
console.log(stringToBooleanFunction('   ku-ka-re-ku  '));
console.log(stringToBooleanFunction('   '));
const compareStrings = (text1, text2) => text1 === text2;
console.log(compareStrings('hello', 'hello'));
// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log(getLastElement([2, 4, 5, 6, 6, 6, 8]));
console.log(getLastElement(['a', 's', 'f']));
// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.
function makeTriple(a, b, c) {
    return [a, b, c];
}
console.log(makeTriple(3, 2, 7));
//# sourceMappingURL=index.js.map