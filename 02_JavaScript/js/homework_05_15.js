/*
Есть объект points с оценками. Напишите код, который выведет сумму всех оценок.
var points = {
"Вася": 200,
"Петя": 300,
"Даша": 250,
"Андрей": 150,
"Сергей": 450,
};
Найти имена тех, кто получает минимальную и максимальную оценку.*/

let points = {
    "Вася": 200,
    "Петя": 300,
    "Даша": 250,
    "Андрей": 150,
    "Сергей": 450,
};
const points_destruct = Object.entries(points);
let key_max;
let value_max = 0;
let key_min;
let value_min = Infinity;
let sum = 0;

points_destruct.forEach(([key, value]) => {
    if (Number(value) > value_max) {
        value_max = Number(value);
        key_max = String(key);
    }
    if (value < value_min) {
        value_min = Number(value);
        key_min = String(key);
    }
    sum += Number(value);
});

console.log(`Сумма всех оценок ${sum}, ${key_min} имеет минимальную оценку: ${value_min}. ${key_max} имеет максимальную оценку: ${value_max}`);