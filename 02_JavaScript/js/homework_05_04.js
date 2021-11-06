/*Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом,
  остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")*/

function up_first(str) {
    if (typeof str !== "string") {
        return null;
    }

    let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

    return result;
}

let str_result = up_first( "Иванов");
console.log(str_result);
