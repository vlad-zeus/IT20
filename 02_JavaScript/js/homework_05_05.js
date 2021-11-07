/*Напишите функцию search_string(search, string), которая будет проверять наличие подстроки search в строке string.
  Функция должна вернуть булев тип и быть регистронезависимой (использовать метод indexOf)*/

function search_string(search, string) {
    if (typeof search !== "string" || typeof string !== "string" ) {
        return null;
    }
    search = search.toLowerCase();
    string = string.toLowerCase();


    return string.indexOf(search) >= 0 ? true : false;
}

let search_for_fnc = "amet";
let string_for_fnc = "Ut amet qui id deserunt nisi consectetur sint deserunt sit proident aliquip quis qui. Velit id qui pariatur aute fugiat id sunt dolor duis. Culpa do dolor non laboris et sit veniam est dolore duis ea. Ea veniam cillum cillum proident deserunt nostrud laboris sit in aliqua pariatur sit ex. Est dolore occaecat nostrud ipsum sunt magna laboris consequat dolor enim voluptate minim.";

let str_result = search_string(search_for_fnc, string_for_fnc);
console.log(str_result);
