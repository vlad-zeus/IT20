/*Напишите функцию get_count_days(date), которая будет считать количество дней до Нового года от date,
  если оно задано, иначе посчитать количество дней от текущей даты*/
function get_count_days(date = new Date()) {

    if (date instanceof Date) {
        let new_year = new Date(new Date().getFullYear(), 11, 32);
        return Math.trunc((new_year.getTime() - date.getTime()) / DAY);
        }

}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let star_date = '20/01/2010';
//Категорически не парсилась дата, преобразовал в стандарт.
let date1 = star_date.split("/").reverse().join('-');


console.log(get_count_days(new Date(date1)));

