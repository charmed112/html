// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element === 0) {
//         console.log(` это ноль`)
//     }
//     else if (element % 2 == 0) {
//         console.log(` ${numbers[i]} четное число`)
//     }
//     else {
//         console.log(` ${numbers[i]} не четное число`)
//     }
// }

// дание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const newNumbers = numbers.slice(0, 3);
// console.log(newNumbers);
// const newNumbers2 = numbers.slice(5, 7);
// console.log(newNumbers2);
// const newNumbers3 = newNumbers.concat(newNumbers2)
// console.log(newNumbers3);

// Используя Math.random() вам необходимо генерировать цифры
// от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const numbers = []
// for (let i = 0; i < 5; i++) {
//     function getRandomNumber(min, max) {
//         min = Math.ceil(min)
//         max = Math.floor(max)
//         return numbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//     getRandomNumber(0, 9);
//     console.log(numbers);
// }
// console.log(`коненчый масив [${numbers}]`);

// let summArray = 0;
// for (let i = 0; i < numbers.length; i++) {
//     summArray = summArray + numbers[i];
// }
// console.log(summArray);
// console.log(`минимум в масиве ${Math.min.apply(null, numbers)}`);

// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i]
//     if (element !== 3) {

//     } else {
//         console.log(`Массив  содержит  цифру 3`)
//     }

// }
