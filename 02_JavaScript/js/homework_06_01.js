/*Напишите функцию get_tomorrow(), которая возвращает завтрашнее число в формате 26 ноября 2019г*/

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;


function get_tomorrow() {
    let arr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    let tomorrow  = new Date(Math.trunc(new Date().getTime() + DAY));
    tomorrow = tomorrow.getDate() + ' ' + arr[tomorrow.getMonth()]  + ' ' + tomorrow.getFullYear();
    return tomorrow;


}
console.log(get_tomorrow());

// console.log(`Сумма всех оценок ${sum}, ${key_min} имеет минимальную оценку: ${value_min}. ${key_max} имеет максимальную оценку: ${value_max}`);