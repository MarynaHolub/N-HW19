// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (arr: number[]): number => {
  return arr.filter((item) => item % 2 === 0).reduce((acc, cur)=> acc + cur, 0)
  
};

console.log(sumEvenNumbers([2, 3, 4, 5]));

// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
    (text: string): boolean;
}

const stringToBooleanFunction: StringToBooleanFunction = (text) =>  {
    return text.trim().length > 0
}

console.log(stringToBooleanFunction('   ku-ka-re-ku  '));
console.log(stringToBooleanFunction('   '));

// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.

type CompareStrings = (text1: string, text2: string) => boolean

const compareStrings: CompareStrings = (text1, text2) => text1 === text2

console.log(compareStrings('hello', 'hello'));

// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.

function getLastElement<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1]
}
console.log(getLastElement([2,4,5,6,6,6,8]));
console.log(getLastElement(['a','s','f']));

// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

function makeTriple<T>(a: T, b: T, c: T): T[] {
    return [a,b,c]
}

console.log(makeTriple(3,2,7));
