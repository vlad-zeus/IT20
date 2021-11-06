/*Напишите функцию get_string_length(str), которая в качестве аргумента принимает строку str и возвращает её длину,
предварительно удалив из строки все пробелы (для решения данной задачи обязательно использовать цикл).*/

function get_string_length(str) {
    if (typeof str !== "string") {
        return null;
    }

    let result;
    let one_symbol;

    for (let i = 0; i < str.length; i++) {
        one_symbol = str[i];
        console.log(one_symbol);
        if (one_symbol !== " ") {
            result += one_symbol;
        }
    }

    return result.length;
}

let str_result = get_string_length(
    "Ut amet qui id deserunt nisi consectetur sint deserunt sit proident aliquip quis qui. Velit id qui pariatur aute fugiat id sunt dolor duis. Culpa do dolor non laboris et sit veniam est dolore duis ea. Ea veniam cillum cillum proident deserunt nostrud laboris sit in aliqua pariatur sit ex. Est dolore occaecat nostrud ipsum sunt magna laboris consequat dolor enim voluptate minim."
);
console.log(str_result);
