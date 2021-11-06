/*Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.*/

function get_random(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let max= arr.length;
    let index = Math.floor(Math.random() * max);
    return arr[index];

}
let array_for_fnc = [29, 1, 5, 8, -78, 56, "some string", 889, 745, 528];
let get_random_result = get_random(array_for_fnc);
console.log(get_random_result);