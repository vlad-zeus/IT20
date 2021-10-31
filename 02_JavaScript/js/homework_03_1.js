/*Последовательно ввести 2 числа.
  На отрезке из введенных чисел подсчитать количество чисел кратных 6 и сумму этих чисел.
  Вывести ответ одним уведомлением.*/

let a = prompt("Введите первое число", "0");
let b = prompt("Введите второе число", "0");
const MIN_NUMBER = Math.min(Number(a), Number(b));
const MAX_NUMBER = Math.max(Number(a), Number(b));
const MULTIPLICITY = 6;
let sum = 0;
let count = 0;
for (let i = MIN_NUMBER; i <= MAX_NUMBER; i++) {
    if (i !== 0 && i % MULTIPLICITY === 0) {
        console.log(i)
        sum += i;
        count += 1;
    }
}
alert(`Количество чисел кратных ${MULTIPLICITY}: ${count} 
    \nСумма чисел равна: ${sum}`);







