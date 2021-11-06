/*Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength –
заменяет конец str на "...", так чтобы ее длина стала равна maxlength.*/

function search_string(str, maxlength) {
    if (typeof str !== "string" || typeof maxlength !== "number" ) {
        return null;
    }

    if (str.length > maxlength) {
        return result = str.slice(0, 7) + '...'
    };
}

let maxlength_for_fnc = 10;
let string_for_fnc = "Ut amet qui id deserunt nisi consectetur sint deserunt sit proident aliquip quis qui. Velit id qui pariatur aute fugiat id sunt dolor duis. Culpa do dolor non laboris et sit veniam est dolore duis ea. Ea veniam cillum cillum proident deserunt nostrud laboris sit in aliqua pariatur sit ex. Est dolore occaecat nostrud ipsum sunt magna laboris consequat dolor enim voluptate minim.";

let str_result = search_string(string_for_fnc, maxlength_for_fnc);
console.log(str_result);
