let a = prompt("Введите километраж", "0");
let b = prompt("Введите диаметр колеса в дюймах", "0");
let length_km = Number(a);
let wheel_d = Number(b);
if (length_km !== 0) {
    if (length_km > 0) {
        if (wheel_d >= 15 && wheel_d <= 159) {
            let wheel_length_m = Math.PI * wheel_d * 2.54 / 100;
            let wheel_length_km = Math.PI * wheel_d * 2.54 / 100 / 1000;
            let wheel_turn = length_km / wheel_length_km;
            let wheel_turn_4 = wheel_turn * 4;
            alert("Полный оборот колеса за: " + wheel_length_m.toFixed(2) + " метров" +
                "\n" + "Оборотов одной шины: " + wheel_turn.toFixed(2) +
                "\n" + "Оборотов четырех шин: " + wheel_turn_4.toFixed(2))
        } else {
            console.log("Неверное значение диаметра шин! Введите положительное число от 15 до 159!")
        }
    } else {
        console.log("Неверное значение километража! Введите положительное число!")
    }
} else {
    console.log("Неверное значение километража! Автомобиль не осуществлял движение!")
}





