/*Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое.
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."*/

function get_short_fio(full_fio) {
    if (typeof full_fio !== "string") {
        return null;
    }
    let fio_array = full_fio.split(" ")
    return result = fio_array[0] + " " + fio_array[1].slice(0, 1) + ". " + fio_array[2].slice(0, 1)+ ".";

}
let fio = 'Иванов Сергей Петрович'
let fio_result = get_short_fio(fio);
console.log(fio_result);