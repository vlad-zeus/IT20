/*  Напишите функцию get_day(date), которая возвращает день недели от заданной даты. Например: get_day(’27-11-1988’) должно вернуть «воскресенье»*/
function get_day(date) {

    if (date instanceof Date) {
        let days_arr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days_arr[date.getDay()];
        }

}

let star_date = '07/11/2021';
//Категорически не парсилась дата, преобразовал в стандарт.
let date1 = star_date.split("/").reverse().join('-');


console.log(get_day(new Date(date1)));

