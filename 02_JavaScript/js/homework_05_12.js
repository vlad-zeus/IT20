/*Напишите функцию get_uniq_arr( arr ), которая удаляет из заданного массива arr элементы, которые дублируются (необходимо использовать цикл)*/

function get_uniq_arr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        let index = 0;
        while (index !== -1) {
            console.log(arr[i], arr[i+1], i, i+1);
            index = arr.indexOf(arr[i],i+1);
            let copy = arr.slice();
            console.log(copy)
            if (index !== -1) {
                arr.splice(index, 1)
            }
        }
    }
    return arr;
}

let array1 = [29, 1, 5, 8, -78, 8, 56, "some string", 889, 5, 745, 1, 29, 1, 528];
let result = get_uniq_arr(array1);
console.log(result);