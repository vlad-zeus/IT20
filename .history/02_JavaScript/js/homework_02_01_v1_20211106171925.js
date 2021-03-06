/*
Ввести с помощью функции prompt любое число и вывести в уведомление в таком формате:
1 день
2 дня
5 дней
17 дней
35 дней
1532 дня.

Это решение было придумано в момент оглашения задания. Сначала все-таки попробовал с делением, у меня не получилось быстро.
Поэтому сначала сделал, как работу со строками. И уже, когда сделал, понял, что надо получать остаток делением на 100.
*/

function days_in_word(x) {
    if (x === 0 || (x >= 5 && x <= 20)) {
        return "дней";
    } else if (x === 1) {
        return "день";
    } else if (x >= 2 && x <= 4) {
        return "дня";
    }
}

let a = prompt("Введите число", "0");
let length_days = a.length;
let last_symbol;
if (a >= 0) {
    if (length_days > 2) {
        last_symbol = Number(a.slice(-2));
    } else {
        last_symbol = Number(a);
    }
    if (last_symbol >= 0 && last_symbol <= 20) {
        alert(a + ' ' + days_in_word(last_symbol));
    }
    if (last_symbol >= 21 && last_symbol <= 99) {
        last_symbol = Number(a.slice(-1));
        alert(a + ' ' + days_in_word(last_symbol));
    }
} else {
    alert("Введите положительное число!")
    window.location.reload();
}

