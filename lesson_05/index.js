// ===
const string = "ABCxyz_@#123";
const strDigit = "123";
const number = 456;
const boolean = true;

// 1. Cложение различных типов(string+boolean, string+number, number+boolean)
console.log("=== 1 ===");
console.log(`${string + boolean} - ${typeof (string + boolean)}`);
console.log(`${string + number} - ${typeof (string + number)}`);
console.log(`${number + boolean} - ${typeof (number + boolean)}`);
console.log("=== * ===");
console.log(`${strDigit + boolean} - ${typeof (string + boolean)}`);
console.log(`${strDigit + number} - ${typeof (string + number)}`);

// 2. Умножение различных типов(string * boolean, string * number, number * boolean)
console.log("=== 2 ===");
console.log(`${string * boolean} - ${typeof (string * boolean)}`);
console.log(`${string * number} - ${typeof (string * number)}`);
console.log(`${number * boolean} - ${typeof (number * boolean)}`);
console.log("=== * ===");
console.log(`${strDigit * boolean} - ${typeof (string * boolean)}`);
console.log(`${strDigit * number} - ${typeof (string * number)}`);

// 3. Деление различных типов(string/boolean, string/number, number/Boolean)
console.log("=== 3 ===");
console.log(`${string / boolean} - ${typeof (string / boolean)}`);
console.log(`${string / number} - ${typeof (string / number)}`);
console.log(`${number / boolean} - ${typeof (number / boolean)}`);
console.log("=== * ===");
console.log(`${strDigit / boolean} - ${typeof (string / boolean)}`);
console.log(`${strDigit / number} - ${typeof (string / number)}`);

// 4. Явное преобразование(number, string, boolean)
console.log("=== 4 ===");
console.log(`${Number(string)} - ${typeof Number(string)}`);
console.log(`${Number(boolean)} - ${typeof Number(boolean)}`);
console.log("--- * ---");
console.log(`${Number(strDigit)} - ${typeof Number(string)}`);
console.log("---------");
console.log(`${String(number)} - ${typeof String(number)}`);
console.log(`${String(boolean)} - ${typeof String(boolean)}`);
console.log("---------");
console.log(`${Boolean(number)} - ${typeof Boolean(number)}`);
console.log(`${Boolean(string)} - ${typeof Boolean(string)}`);
console.log("---------");
console.log(`${number.toString()} - ${typeof number.toString()}`);
console.log(`${+strDigit} - ${typeof +strDigit}`);
console.log(`${+string} - ${typeof +string}`);
