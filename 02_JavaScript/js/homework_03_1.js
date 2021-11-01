/*Последовательно ввести 2 числа.
  На отрезке из введенных чисел подсчитать количество чисел кратных 6 и сумму этих чисел.
  Вывести ответ одним уведомлением.*/

let a = prompt("Введите первое число", "0");
let b = prompt("Введите второе число", "0");
a = Number(a);
b = Number(b);
const MULTIPLICITY = 6;
if (!isNaN(a) || !isNaN(b)) {
  const MIN_NUMBER = Math.min(a, b);
  const MAX_NUMBER = Math.max(a, b);
  let sum = 0;
  let count = 0;
  for (let i = MIN_NUMBER; i <= MAX_NUMBER; i++) {
    if (i !== 0 && i % MULTIPLICITY === 0) {
      console.log(i);
      sum += i;
      count += 1;
    }
  }
  alert(`Количество чисел кратных ${MULTIPLICITY}: ${count} 
       \nСумма чисел равна: ${sum}`);
} else {
  alert(`Введите число!`)
  window.location.reload();
}
