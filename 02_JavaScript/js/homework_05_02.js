/*Написать функцию count_symbol( symbol, string ), которая подсчитает количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число*/

function count_symbol(symbol, string_for_fnc) {
    if (typeof symbol !== "string" || typeof string_for_fnc !== "string") {
        return null;
    }

    let result = 0;
    let one_symbol;
    string_for_fnc = string_for_fnc.toLowerCase();
    symbol = symbol.toLowerCase();


    for (let i = 0; i < string_for_fnc.length; i++) {
        one_symbol = string_for_fnc[i];
        console.log(one_symbol);
        if (one_symbol === symbol) {
            result++;
            console.log(count);
        }
    }

    return result;
}

let count_symbol_result = count_symbol(
    "U",
    "Ut amet qui id deserunt nisi consectetur sint deserunt sit proident aliquip quis qui. Velit id qui pariatur aute fugiat id sunt dolor duis. Culpa do dolor non laboris et sit veniam est dolore duis ea. Ea veniam cillum cillum proident deserunt nostrud laboris sit in aliqua pariatur sit ex. Est dolore occaecat nostrud ipsum sunt magna laboris consequat dolor enim voluptate minim."
);
console.log(count_symbol_result);
