/*Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке.
Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"*/

function get_order(string) {
    if (typeof string !== "string") {
        return null;
    }
    return string.split(' ').sort().join(" ");

}
let string_for_fnc = "Ut amet qui id deserunt nisi consectetur sint deserunt sit proident aliquip quis qui. Velit id qui pariatur aute fugiat id sunt dolor duis. Culpa do dolor non laboris et sit veniam est dolore duis ea. Ea veniam cillum cillum proident deserunt nostrud laboris sit in aliqua pariatur sit ex. Est dolore occaecat nostrud ipsum sunt magna laboris consequat dolor enim voluptate minim."
let get_order_result = get_order(string_for_fnc);
console.log(get_order_result);