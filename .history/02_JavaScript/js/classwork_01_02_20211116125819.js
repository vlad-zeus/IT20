/*Напишите функцию, которая возвращает новый массив без предоставленных значений. Используйте примитивные типы*/
function return_new_arrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return null;
    }

    let result_arr = arr1.slice();

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                let index = result_arr.indexOf(arr2[i]);
                result_arr.splice(index, 1);
            }
        }
    }
    return result_arr;
}

let array1 = [29, 1, 5, 8, -78, 56, "some string", 889, 745, 528];
let array2 = [1, 5, 8, 56, -78, "some string"];

let result = return_new_arrays(array1, array2);
console.log(result);
