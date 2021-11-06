/*Напишите функцию get_type_file( file_name ), которая получает расширение файла в заданном имени файла file_name (пример: get_type_file("readme.txt"),
функция должна вернуть ".txt")*/

function get_type_file(file_name) {
    if (typeof file_name !== "string") {
        return null;
    }

    return result = file_name.slice(file_name.indexOf('.') + 1)

}
let filename = 'index.php'
let file_name_result = get_type_file(filename);
console.log(file_name_result);
