
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

// arr = [1, 5, 7, 9];
// console.log(Math.min(...arr));

// Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
    let count = 0;
    return newObject = {
        increment() {
            count += 1

        },
        decrement() {
            count -= 1
            return count;
        },
        printFunction() {
            return count;
        },

    }
}

let func = createCounter();
func.increment();
console.log(func.printFunction());
func.decrement();
console.log(func.printFunction());


