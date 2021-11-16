/*
Ввести с помощью функции prompt любое число и вывести в уведомление в таком формате:
1 день
2 дня
5 дней
17 дней
35 дней
1532 дня.
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
let days;
let last_day = a % 100;
if (Number(a) >= 0) {
    if (last_day >= 0 && last_day <= 20) {
        alert(a + " " + days_in_word(last_day));
    } else {
        last_day = last_day % 10;
        alert(a + " " + days_in_word(last_day));
    }
} else {
    alert("Введите положительное число!");
    window.location.reload();
}
