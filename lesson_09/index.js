/*
Занятие 9 - Домашнее задание
Добрый день.
Все задания выполнять функциями, данные даны для примера
1. Дана строка из 6-ти цифр. 
Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
 Если это так - выведите 'да', в противном случае выведите 'нет'.
2. Дано число n=1000 (может быть любое исло). Делите его на 2 столько раз, 
пока результат деления не станет меньше 50 (может быть любое число).
 Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве.
 Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
6. Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его.
*/

console.log("=== 1 ===");
function checkNumSum(str) {
  if (str.length !== 6 || isNaN(+str)) {
    return "Ввод должен содержать 6 цифр";
  }

  const firstPart = str.substring(0, 3);
  const secondPart = str.substring(3, 6);

  const sumFirstPart = firstPart
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  const sumSecondPart = secondPart
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

  return sumFirstPart === sumSecondPart ? "да" : "нет";
}

console.log(checkNumSum("123123"));
console.log(checkNumSum("123456"));
console.log("=========");

console.log("=== 2 ===");
function cоuntEteration(n, lim) {
  let count = 0;
  while (n >= lim) {
    n /= 2;
    count++;
  }
  return count;
}
const num = cоuntEteration(1000, 50);
console.log(num);
console.log("=========");

console.log("=== 3 ===");
function averageArr(arr) {
  const sum = arr.reduce((acc, n) => acc + n);
  return sum / arr.length;
}
console.log(averageArr([12, 15, 20, 25, 59, 79]));
console.log("=========");

console.log("=== 4 ===");
function insertIntoArray(arr, index, ...items) {
  if (index < 0 || index > arr.length) {
    console.error("Неверный индекс для вставки");
    return arr;
  }

  if (items.length === 0) {
    console.error("Нет элементов для вставки");
    return arr;
  }

  arr.splice(index, 0, ...items);
  return arr;
}
let array = [1, 2, 3, 4, 5];

insertIntoArray(array, 3, "a", "b", "c");
console.log(array);
console.log("=========");

console.log("=== 5 ===");
function insertAtMultiplePositions(arr, index, data) {
  const lenData = data.length;
  const lenInd = index.length;
  const sizeOfPart = Math.floor(lenData / lenInd);
  const remainder = lenData % lenInd;
  const newData = [];

  let taken = 0; // сколько элементов уже взято

  for (let i = 0; i < lenInd; i++) {
    let currentPartSize = sizeOfPart;

    if (i < remainder) {
      currentPartSize++; // добавляем один элемент из остатка
    }

    newData.push(data.slice(taken, taken + currentPartSize));
    taken += currentPartSize;
  }

  // Используем индексы в обратном порядке
  for (let i = index.length - 1; i >= 0; i--) {
    arr.splice(index[i], 0, ...newData[i]);
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5];
const index = [1, 3, 5];
const data = ["a", "b", "c", "e"];

insertAtMultiplePositions(arr, index, data);
console.log(arr); // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
console.log("=========");

console.log("=== 6 ===");
function mySort(array) {
  return array.sort((a, b) => a - b);
}
console.log(mySort([3, 4, 1, 2, 7, 30, 50]));
console.log("=========");
