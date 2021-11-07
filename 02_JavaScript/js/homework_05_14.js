/*
Создайте функцию is_empty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
Например:
var schedule = {};
isEmpty(schedule) ; // должно вернуть true
schedule["8:30"] = "подъём";
isEmpty(schedule) ; //должно вернуть false*/

function is_empty(obj) {
    console.log(typeof obj)
    console.log(obj.length)
    if (typeof obj !== "object") {
        return null;
    }

    return Object.keys(obj).length > 0 ? true : false;

}

let my_obj = {};
// my_obj.name = "Вася";
// my_obj.surname = "Петров";
let result_obj = is_empty(my_obj);
console.log(result_obj);