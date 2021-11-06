/*Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.*/

function get_min(arr) {
    for (let i= 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            arr.splice(i, 1)
        }
    }
    return Math.min(...arr)
}

const array = [56, 85, 'number', -4, -95];
console.log(`Минимальное значение массива: ${get_min(array)}`)