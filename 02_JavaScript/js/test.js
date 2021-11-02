let n = prompt('Введите максимальное число', '0');
let n2 = prompt('Введите минимальное число', '0');

n = Number(n);
n2 = Number(n2);


s = n - n2; // Отрезок


let result = 0;
for (let i = 0; i < s; i += 6) {
    console.log(i);
    result = result + 1;
}


alert(`
  Отрезок из введенных чисел ${s}
  Результат первого числа ${result}
  `);