/*С помощью функции-конструктора, написать создание объекта Калькулятор.
Функция конструктор принимает в качестве единственного параметра название калькулятора.*/
function Create_calculator(name) {
    this.name = name;
}
let calc = new Create_calculator('Калькулятор');
console.log(calc);

