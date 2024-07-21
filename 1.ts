// Именованная функция
function add(x: number, y: number): number {
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
exampleFunction("Hello", 42); // Ошибка: недостаточно аргументов
exampleFunction("Hello", 42, true, "extra"); // Ошибка: слишком много аргументов
// rest-параметр args описан как кортеж [string, ...TailParams]. 
// Значит args должен начинаться со строки, а затем следовать кортеж TailParams (из числа и буля) 


// Методы call, apply и bind
// call чтоб вызвать функцию с указанным контекстом и аргументами через запятую
// apply как call, но аргументы передаются в виде массива. Когда не знаешь сколько из будет.
// bind возвращает новую функцию, которая когда бы её не вызвали, будет иметь указанный контекст