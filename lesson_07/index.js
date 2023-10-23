/*
Занятие 7 - Домашнее задание.
Привет
1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
2. найти максимальное значение числа в массиве ([3,67,15...])
3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
4. даны 2 4-х значных числа с неповторяющимися цифрами, 
надо определить сколько цифр в этих числах совпадают по значению 
и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
5. сортировка массива по возрастанию/убыванию
6. удалить из массива все повторяющиеся элементы
- все действия и переборы стараться выполнять методами конструктора Array и Object
-- все примеры должны быть решены функция, функция должна принимать параметры и работать с любыми заданными атрибутами.
Крайний срок: 18.10
*/

console.log("// === 1 ===");
const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.reverse());
function revArr(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(revArr(arr));
console.log("// =========");

console.log("// === 2 ===");
let arr2 = [3, 67, 15, 99, 45, 23, -120];
// console.log(Math.max(...arr2));
function maxValueArr(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxValueArr(arr2));
console.log("// =========");

console.log("// === 3 ===");
// function fibonacciFromTo(n, m) {
//   let fib = [];

//   if (n === 1) fib.push(0);
//   if (n <= 2) fib.push(1);

//   let a = 0;
//   let b = 1;
//   for (let i = 2; i < n; i++) {
//       let next = a + b;
//       a = b;
//       b = next;
//   }

//   for (let i = 0; i < m; i++) {
//       let next = a + b;
//       fib.push(next);
//       a = b;
//       b = next;
//   }

//   return fib;
// }
// const N = 2;
// const M = 5;
// console.log(fibonacciFromTo(N, M));

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciFromTo(start, length) {
  const arr = [];
  for (let i = start; i < start + length; i++) {
    arr.push(fibonacci(i));
  }
  return arr;
}
const N = 4;
const M = 8;

const result = fibonacciFromTo(N, M);
console.log(result);
console.log("// =========");

console.log("// === 4 ===");
function compareNumbers(num1, num2) {
  const strNum1 = String(num1);
  const strNum2 = String(num2);

  let matchValueAndPosition = 0;
  let matchOnlyValue = 0;

  for (let i = 0; i < strNum1.length; i++) {
    if (strNum1[i] === strNum2[i]) {
      matchValueAndPosition++;
    } else if (strNum2.includes(strNum1[i])) {
      matchOnlyValue++;
    }
  }

  return { matchValueAndPosition, matchOnlyValue };
}
const result4 = compareNumbers(3487, 3794);

console.log("Совпадений по значению и позиции:", result4.matchValueAndPosition);
console.log("Совпадений только по значению:", result4.matchOnlyValue);
console.log("// =========");

console.log("// === 5 ===");
function sortArray(arr, direction = "ascending") {
  if (!Array.isArray(arr)) {
    throw new Error("Первый аргумент должен быть массивом");
  }

  if (direction !== "ascending" && direction !== "descending") {
    throw new Error(
      "Направление сортировки может быть только 'ascending' или 'descending'"
    );
  }

  return arr.sort((a, b) => {
    if (direction === "ascending") {
      return a - b;
    } else {
      return b - a;
    }
  });
}

console.log(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // по возрастанию
console.log(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], "descending")); // по убыванию
console.log("// =========");

console.log("// === 6 ===");
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Аргумент должен быть массивом");
  }

  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7, 8, 9]));
console.log("// =========");
