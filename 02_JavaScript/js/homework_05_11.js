/*Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.*/

function get_max(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i= 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            arr.splice(i, 1)
        }
    }
    return Math.max(...arr)


}
let array_for_fnc = [29, 1, 5, 8, -78, 56, "some string", 889, 745, 528];
let get_max_result = get_max(array_for_fnc);
console.log(get_max_result);