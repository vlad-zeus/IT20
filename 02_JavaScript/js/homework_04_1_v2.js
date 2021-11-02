/*Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.*/

const array = [85, 2, 'number', -4, -58];

function get_min(arr) {
    arr.sort(function(a, b){
        return (a - b)
    })
    console.log(arr);
    return arr[0]
}
console.log(`Минимальное значение массива: ${get_min(array)}`)