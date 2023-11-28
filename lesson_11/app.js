/*
 Спроектировать объектные модели для заданных предметных областей.
Каждый конструктор, объект, метод и переменная должны иметь
исчерпывающее смысл название и информативный состав. Необходимо точно
продумать, какие конструкторы и объекты необходимы для решения задачи.
Наследование должно применяться только тогда, когда это имеет смысл.
Конструкторы должны быть грамотно разложены по модулям. Работа с консолью
или консольное меню должно быть минимальным (только необходимые данные
для ввода, выводить только то, что просится в условии задачи). Задание
представляет собой какую-то предметную область, в которой требуется
выделить необходимую иерархию и реализовать ее с помощью ООП (используя
наследование, если необходимо). Программа должна создавать объекты
различных классов в выделенной предметной области, объединять их в какой-то
набор объектов. Как правило, задание требует выполнить какое-то действие над
объектами в наборе объектов по заданным критериям.

1. Новогодний подарок. Определить иерархию конфет и прочих сладостей.
Создать несколько объектов-конфет. Собрать детский подарок с
определением его веса. Провести сортировку конфет в подарке на основе
одного из параметров. Найти конфету в подарке, соответствующую
заданному диапазону параметров.
*/

const SweetsFactory = require("./sweetsFactory");
const FilledCandy = require("./filledCandy");
const Gift = require("./gift");
const { question, close } = require("./consoleInput");

async function main() {
  const factory = new SweetsFactory();
  const gift = new Gift();
  try {
    // while (true) {
    //   console.log(
    //     "\nEnter the details of the sweet (or type 'exit' to finish):"
    //   );
    //   const type = await question("Type (Candy/Chocolate): ");
    //   if (type.toLowerCase() === "exit") break;

    //   const name = await question("Name: ");
    //   const weight = await question("Weight (grams): ");

    //   const sweet = factory.createSweets(type, name, parseFloat(weight));
    //   if (sweet) {
    //     gift.add(sweet);
    //     console.log(`${name} added to the gift.`);
    //   } else {
    //     console.log("Unknown type of sweet!");
    //   }
    // }

    const candy1 = factory.createSweets("Candy", "Lollipop", 50);
    const candy2 = factory.createSweets("Candy", "Caramel", 40);
    const filledCandy = new FilledCandy(candy1, "Strawberry");
    const chocolate = factory.createSweets("Chocolate", "Milka", 100);

    gift.add(filledCandy);
    gift.add(candy2);
    gift.add(chocolate);

    if (gift._sweets.length !== 0) {
      console.log(`\nTotal weight of the gift: ${gift.totalWeight} grams.`);
      gift.sortByWeight();
      const range = await question(
        "Enter the weight range to find sweets (e.g. 30-50): "
      );
      const [min, max] = range.split("-").map(Number);
      const sweetsInRange = gift.findByWeightRange(min, max);
      console.log(
        `Sweets in the weight range of ${min} to ${max} grams:`,
        sweetsInRange
      );
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    close();
  }
}

main();
