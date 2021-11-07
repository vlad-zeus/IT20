/*Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих дней между двумя заданными датами.*/
function get_count_work_days(date1, date2) {

    if (date1 instanceof Date && date2 instanceof Date) {
        let index = Math.abs((date1.getTime() - date2.getTime()) / DAY );
        let count = 0;
        for (let i = 0; i < index; i++) {
            date1 = new Date(date1).getTime() + DAY;
            let day_number = new Date(date1).getDay();
            if (day_number >= 1 && day_number <=5) {
                count++;
            }
        }
        return count;
    } else {
        return null;
    }
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let star_date = '20/01/2010';
let finish_date = '15/01/2015';
//Категорически не парсилась дата, преобразовал в стандарт.
let date1 = star_date.split("/").reverse().join('-');
let date2 = finish_date.split("/").reverse().join('-');

console.log(get_count_work_days(new Date(date1), new Date(date2)));

