/*Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, второй параметр вычитатель/делитель.*/
function Calculator(name) {
    this.name = name;
    this.check_param = function (param) {
        let result_arr = [];
        for (let i = 0; i < param.length; i++) {
            if (!isNaN(param[i])) {
                result_arr.push(param[i]);
            }
        }
        return result_arr;
    }
    this.calculate_result = function (param1, param2) {
        let clean_arg = this.check_param(param2);
        let math_symbol;
        let clean_arg_length = clean_arg.length;
        switch (param1) {
            case 'sum':
                math_symbol = '+';
                break;
            case 'sub':
                math_symbol = '-';
                break;
            case 'mul':
                math_symbol = '*';
                break;
            case 'seg':
                math_symbol = '/';
                break;
        }
        let result = clean_arg[0];
        if (clean_arg_length < 2) {
            console.log(`Введено недостаточное количество цифровых параметров - ${clean_arg_length}!`)
        } else if (clean_arg_length > 2) {
            console.log(`Введено больше цифровых параметров, чем необходимо - ${clean_arg_length}! Излишние параметры проигнорированы!`)
        }
        for (let j = 1; j < clean_arg.length; j++) {
            result = eval(result + math_symbol + clean_arg[j]);
        }
        return result;
    }
    this.summation = function (...arg) {
        return this.calculate_result('sum', arg);
    }
    this.subtraction = function (...arg) {
        return this.calculate_result('sub', arg);
    }
    this.multiplication = function (...arg) {
        return this.calculate_result('mul', arg);
    }
    this.segment = function (...arg) {
        return this.calculate_result('seg', arg);
    }
}
let calculator = new Calculator();
console.log(calculator.segment(1,2, 'dfyz', 48));

