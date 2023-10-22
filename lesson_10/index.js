/*
Занятие 10 - Домашнее задание
1. Решить используя промисы и async/await.
Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
Используйте также функцию getNum, чобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата getNum,
а затем найдет сумму полученных чисел и выводит на экран.
Крайний срок 26.10
*/

async function task1() {
  console.log("=== 1 ===");

  function randomDelay() {
    return Math.floor(Math.random() * 5) + 1;
  }

  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, randomDelay() * 1000);
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, randomDelay() * 1000);
  });

  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, randomDelay() * 1000);
  });

  const result = await Promise.race([promise1, promise2, promise3]);
  console.log(result);
  console.log("=========");
}

async function task2() {
  console.log("=== 2 ===");

  function getNum() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 5) + 1);
      }, 3000);
    });
  }

  //   async function displaySquare() {
  const number = await getNum();
  console.log(number ** 2);
  console.log("=========");
  //   }
  //   await displaySquare();
}

async function task3() {
  console.log("=== 3 ===");
  function getNum(min, max, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(randomNumber);
      }, delay);
    });
  }

  //   async function displaySum() {
  const firstNumber = await getNum(1, 5, 3000); // случайное число от 1 до 5 с задержкой в 3 секунды
  const secondNumber = await getNum(6, 10, 5000); // случайное число от 6 до 10 с задержкой в 5 секунд

  console.log("First number:", firstNumber);
  console.log("Second number:", secondNumber);
  console.log("Sum:", firstNumber + secondNumber);
  console.log("=========");
  //   }
  //   await displaySum();
}

(async function main() {
  await task1();
  await task2();
  await task3();
})();
