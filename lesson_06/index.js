/*
Занятие 6 - Домашнее задание.
Добрый день.
1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза.
    У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня.
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )
3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
    Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
а. числа изначальное число целое, числа разбивки - целые (4,6,5)
б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
Крайний срок 12.10
*/

console.log("=========");
console.log("=== 1 ===");
function myRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function game() {
  let player1 = 0;
  let player2 = 0;

  for (let i = 0; i < 3; i++) {
    player1 += myRandom();
    player2 += myRandom();
  }

  if (player1 > player2) {
    console.log(`Счет: Первый-Игрок = ${player1} | Второй-Игрок = ${player2}`);
    console.log(`Первый игрок побеждает!!!`);
  } else if (player1 < player2) {
    console.log(`Счет: Первый-Игрок = ${player1} | Второй-Игрок = ${player2}`);
    console.log(`Второй игрок побеждает!!!`);
  } else {
    console.log(`Счет: Первый-Игрок = ${player1} | Второй-Игрок = ${player2}`);
    console.log(`НИЧЬЯ!!!`);
  }
}

game();
console.log("=========");

console.log("=== 2 ===");
const nowDate = new Date();
function countFridays13() {
  let count = 0;
  for (let year = 2000; year <= new Date().getFullYear(); year++) {
    for (let month = 0; month < 12; month++) {
      let date = new Date(year, month, 13);
      if (date.getDay() === 5 && date <= nowDate) {
        count++;
      }
    }
  }
  return count;
}

console.log(`Количество Пятниц 13-ого с 01/01/2000 до ${nowDate.toLocaleString('en-GB')} = ${countFridays13()}`);
console.log("=========");

console.log("=== 3 ===");
console.log("--- a ---");
function splitNumber(n, parts) {
    let numbers = [];
    for (let i = 0; i < parts - 1; i++) {
        let random = Math.floor(Math.random() * (n - (parts - i - 1))) + 1;
        numbers.push(random);
        n -= random;
    }
    numbers.push(n);
    return numbers;
}

console.log(splitNumber(15, 3));
console.log("---------");

console.log("--- b ---");
function splitNumberDecimal(n, parts) {
    let numbers = [];
    for (let i = 0; i < parts - 1; i++) {
        let random = parseFloat((Math.random() * (n - (parts - i - 1))).toFixed(2));
        numbers.push(random);
        n = parseFloat((n - random).toFixed(2));
    }
    numbers.push(n);
    return numbers;
}

console.log(splitNumberDecimal(15, 3));
console.log("=========");
