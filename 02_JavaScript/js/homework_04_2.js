/*Создайте массив с четными числами в диапазоне от 500 до 888 включительно.*/

let arr1 = [];
const MIN_NUMBER = 500;
const MAX_NUMBER = 888;
for (let i = MIN_NUMBER; i <= MAX_NUMBER; i++) {
    if (i %2 === 0) {
        arr1.push(i);
    }
}
console.log(arr1)





