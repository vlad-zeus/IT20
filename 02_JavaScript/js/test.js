/*
let str = prompt("Введите строку :");

function get_string_length(str) {
    if (typeof str !== "string") {
        return false;
    }

    let count = 0;

    for (let i = 0; i < str.length;  i++) {
        console.log(str[i]);
        if (str[i] == " ") {
            console.log(str[i]);
            count++;
        }
    }
    let result = str.split(" ").join('');
    return `Символов: ${result.length} Пробелов: ${count}`;
}

let result2 = get_string_length(str);

alert(result2);*/

let str = prompt("Введите строку :");

function get_string_length(str) {
    if (typeof str !== "string") {
        return false;
    }

    let count = 0;

    for (let i = 0; i <str.length;  i++) {
        if (str.charAt(i) == " ") {
            count++;
        }

    }

    let result = str.split(" ").join('');


    return `Символов: ${result.length} Пробелов: ${count}`;
}

let result2 = get_string_length(str);

alert(result2);
