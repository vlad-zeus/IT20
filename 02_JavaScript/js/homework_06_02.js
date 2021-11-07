/*  Написать функцию, которая находит разницу в днях между двумя заданными датами.
  Например, заданные даты «20/01/2010» и «15/01/2010», функция должна вернуть число 5. Разницу в днях необходимо считать по модулю.*/
function get_difference(date1, date2) {

    if (date1 instanceof Date || date2 instanceof Date) {
        return Math.abs((date1.getTime() - date2.getTime()) / DAY );
    } else {
        return null;
    }
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let star_date = '20/01/2010';
let finish_date = '15/01/2010';
let date1 = star_date.split("/").reverse().join('-');
let date2 = finish_date.split("/").reverse().join('-');

console.log(date1, date2);

console.log(get_difference(new Date(date1), new Date(date2)));

// console.log(`Сумма всех оценок ${sum}, ${key_min} имеет минимальную оценку: ${value_min}. ${key_max} имеет максимальную оценку: ${value_max}`);