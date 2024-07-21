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


