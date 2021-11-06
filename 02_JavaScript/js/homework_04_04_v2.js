/*Необходимо написать мини-игру «Города». Нужно бесконечно запрашивать у пользователя ввод города.
Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко.
Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».*/

let first_town = prompt("Введите название города", "");
let other_town;
let first_symbol;
let last_symbol = first_town.slice(-1).toLowerCase();
console.log("последняя буква: " + last_symbol);
let i = 0;
let next_step_symbol = last_symbol;
do {
    other_town = prompt("Введите название города", "");
    first_symbol = other_town.slice(0, 1).toLowerCase();
    console.log("первая буква: " + first_symbol);
    last_symbol = next_step_symbol;
    if (last_symbol === first_symbol) {
        next_step_symbol = other_town.slice(-1).toLowerCase();
        i++;
    }
} while (last_symbol === first_symbol);
alert(`Игра окончена. Ваши очки: ${i}`);