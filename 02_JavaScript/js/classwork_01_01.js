/*Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.*/
function compare_arrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return null;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

let array1 = [1, 5, 8, -78, 56, "some string"];
let array2 = [1, 5, 8, 56, -78, "some string"];

let result = compare_arrays(array1, array2);
console.log(result);