// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
// function raisingNumber(number1) {
//     return console.log(number1 * number1 * number1);
// }
// raisingNumber(2);
// raisingNumber(3)
// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст 
// "Размер заработной платы за вычетом налогов равен значение"

// function ndfl(number1) {
//     number1 = Number(prompt("ВВедитите  вашу заработную плату"));
//     if (Number.isFinite(number1) == false) {
//         console.log("значение задано неверно");
//     } else {
//         yourNdfl = number1 * 0.87;
//         console.log(`Размер заработной платы за вычетом налогов равен значение ${yourNdfl}`);
//     }
// }
// ndfl();
// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать
//  функцию, которая определяет максимальное значение среди этих чисел
// function maxNumber(number1, number2, number3) {
//     number1 = Number(prompt("введите первое число"));
//     number2 = Number(prompt("введите второе число"));
//     number3 = Number(prompt("введите третье число"));
//     if (number1 > number2 && number1 > number3) {
//         console.log(`максимальное число ${number1}`);
//     } else if (number2 > number1 && number2 > number3)
//         console.log(`максимальное число ${number2}`);
//     else {
//         console.log(`максимальное число ${number3}`);
//     }
// }
// maxNumber();
// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из 
// операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция 
// должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные 
// числа, проверки на NaN, Infinity делать не нужно.


// function sum(number1, number2) {
//     sumNumbers = number1 + number2;
//     console.log(` Сумма двух чисел равна ${sumNumbers}`)
//     return sumNumbers;
// }
// sum(5, 4);

// function difference(number1, number2) {
//     if (number1 > number2) {
//         differenceNumbers = number1 - number2;
//         console.log(` Разность двух чисел равна ${differenceNumbers}`)
//         return differenceNumbers;
//     } else if (number1 === number2) {
//         differenceNumbers = number1 - number2;
//         console.log(` Разность двух чисел равна ${differenceNumbers}`)
//         return differenceNumbers;
//     } else {
//         console.log("Получилось  отрицательное число")
//     }
// }
// difference(4, 5);

// function multiplication(number1, number2) {
//     multipNumb = number1 * number2;
//     console.log(` Умножение двух чисел равно ${multipNumb}`)
//     return multipNumb;
// }
// multiplication(2, 2);

// function division(number1, number2) {
//     divisionNumber = number1 / number2;
//     console.log(` Деление двух чисел равно ${divisionNumber}`)
//     return divisionNumber;
// }
// division(4, 2);
