// // Задание1
// let num1 = +prompt("Введиче число num1  меньше двух");
// if (num1 <= 1) {
//     console.log(`вы ввели ${num1} оно входит в наш диапазон`);
// } else {
//     console.log(`вы ввели ${num1} оно больше 1 данное число не подходит`);
// }

// let num2 = +prompt("Введиче число  num2 больше трех");
// if (num2 >= 3) {
//     console.log(`вы ввели ${num1} оно входит в наш диапазон`);
// } else {
//     console.log(`вы ввели ${num1} оно больше 1 данное число не подходит`);
// }
// // Задача 2 Перепишите код к тернарному оператору

// let test = true;
// (test === true) ? console.log('+++') : console.log('---');

// // Задание 3
// // В переменной day лежит какое-то число из интервала от 1 до 31.
// //  Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// let day = prompt("Введите число от 1 до 31 ")
// switch (true) {
//     case day <= 10:
//         console.log(`Число ${day} относится к первой декаде`);
//         break;
//     case day <= 20:
//         console.log(`Число ${day} относится к второй декаде`);
//         break;
//     case day <= 31:
//         console.log(`Число ${day} относится к третьей декаде`);
//         break;
// }
// Задание 4.
// = +prompt("введите число от 1 до 9999");

// let count = 9537;
// let hundreds = (count - count % 100) / 100;
// let dozens = count % 10;
// let tens = (count % 100 - dozens) / 10;
// console.log(`В числе ${count} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${dozens}  ffff ${hundreds2}`);