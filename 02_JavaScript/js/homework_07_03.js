/* Калькулятор должен хранить историю действий в виде строки в таком формате: Имя калькулятора (Дата Время): действие, результат, (параметры).
Например после действия сумма в истории должна появится такая запись: "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий. */
function Calculator(name) {
    this.name = name;
    this.history = [];
    this.history_read = function (param) {
        for (let i = 0; i < param.length; i++) {
            console.log(param[i]);
        }
        return 'Вывод истории завершен'
    };
    this.history_destruct = function (param) {
        param.splice(0);
        return 'История очищена!'
    };
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
        let word_for_history;
        let clean_arg_length = clean_arg.length;
        switch (param1) {
            case 'sum':
                math_symbol = '+';
                word_for_history = 'сумма'
                break;
            case 'sub':
                math_symbol = '-';
                word_for_history = 'разность'
                clean_arg.splice(2);
                break;
            case 'mul':
                math_symbol = '*';
                word_for_history = 'произведение'
                break;
            case 'seg':
                math_symbol = '/';
                word_for_history = 'частное'
                clean_arg.splice(2);
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

        let date_for_history = new Date().getDate() + '.' + eval(new Date().getMonth() + 1) + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes();
        this.history.push(`${this.name} ${date_for_history}: ${word_for_history} = ${result}, (${clean_arg})`)
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

let calculator = new Calculator('my_calc');
console.log(calculator.summation(1, 2, 'dfyz', 48));
console.log(calculator.subtraction(25));
console.log(calculator.multiplication(18, 28, 'dfyz', 48));
console.log(calculator.history_read(calculator.history));
console.log(calculator.history_destruct(calculator.history));
console.log(calculator.segment(98, 19, 5, 3));
console.log(calculator.history_read(calculator.history));
