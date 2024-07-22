// Именованная функция
function add1(x: number, y: number): number {
  return x + y;
}

// Функциональное выражение
let multiply = function(x: number, y: number): number { return x * y;
}; 

// Стрелочная функция
let divide = (x: number, y: number): number => {
  return x / y;
};

// Сокращённое стрелочное выражение Express
let subtract = (x: number, y: number): number => x - y;

// Конструктор Function позволяет объявлять функции динамически, 
// но его использование может быть опасным 
// из - за возможности исполнения произвольного кода
let userInput = 'что-то, полученное из формы'
let add7 = new Function('x', 'y', 'return x + y');
let foo = new Function(userInput); foo();

// Опциональные и предустановленные параметры
function greeting(name: string, age?: number, city: string = "Unknown") {
  let result = `Hello, ${name}`
  if (age !== undefined) {
    result += `You are ${age} years old`
  }
  result += `You are from ${city}`
  return result;
}


// Rest параметры позволяют функции принимать произвольное количество аргументов в виде массива
function collectNames(...names: string[]) {
  return names.join(", ");
}

// в ts можно использовать rest-параметр не на последнем месте, если после него идут tuple types (кортежи). 
type TailParams = [number, boolean];

function exampleFunction(...args: [string, ...TailParams]) {
  const [first, second, third] = args;
  console.log(first); // string
  console.log(second); // number
  console.log(third); // boolean
}

exampleFunction("Hello", 42, true); // корректный вызов
// exampleFunction("Hello", 42); // Ошибка: недостаточно аргументов
// exampleFunction("Hello", 42, true, "extra"); // Ошибка: слишком много аргументов
// rest-параметр args описан как кортеж [string, ...TailParams]. 
// Значит args должен начинаться со строки, а затем следовать кортеж TailParams (из числа и буля) 


// Методы call, apply и bind.
// - call чтоб вызвать функцию с указанным контекстом и аргументами через запятую
// - apply как call, но аргументы передаются в виде массива. Когда не знаешь сколько из будет.
// - bind возвращает новую функцию, которая когда бы её не вызвали, будет иметь указанный контекст


// Функции-генераторы чтобы создавать итерируемые функции
// Про генераторы в js https://learn.javascript.ru/generators
function* numberGenerator(): Generator<number> {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const gen = numberGenerator();

console.log(gen.next().value);  // 0
console.log(gen.next().value);  // 1
console.log(gen.next().value);  // 2


// Типизация this чтоб явно указать тип для 'this' внутри функции
function multiplyByTwo(this: number): number {
    return this * 2;
}
// Метод call установит значение this в ПЕРВОМ аргументе
console.log(multiplyByTwo.call(10)); // 20
const doubleDozen = multiplyByTwo.call(12);
console.log(doubleDozen);

// На чистом js
function sum(a, b) {
  return `this, a, b = ${this}, ${a}, ${b}`;  
}
sum(1, 2); // 'this, a, b = [object global], 1, 2'
sum.call(0, 1, 2) // 'this, a, b = 0, 1, 2'


// Перегрузка функций
// Одна функция может иметь несколько возможных сигнатур входных и выходных типов
function add(a:string, b:string): string;
function add(a:number, b:number): number;
function add(a: any, b: any): any {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(' ',b);
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}