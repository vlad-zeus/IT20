/*Написать программу, которая должна за минимальное количество попыток отгадать задуманное пользователем число от 0 до 100.*/

let min_number = 0;
let max_number = 100;
let confirm_result = '';
let temp_result = 0;
let difference = 0;
const MAX_COUNT = 10;

for (let i = 0; i < MAX_COUNT; i++) {
    temp_result = (max_number + min_number) / 2;
    confirm_result = confirm(`${temp_result} больше загаданного числа?`);
    if (confirm_result === true) {
        max_number = temp_result;
    } else {
        min_number = temp_result
    }
    difference = max_number - min_number;
    if (difference < 1) {
        break;
    }
}
alert(`загаданное число ${Math.floor(max_number)}`);






