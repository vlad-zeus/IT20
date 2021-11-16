/*Написать функцию count_symbol( symbol, string ), которая подсчитает количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число*/

function count_symbol(symbol, string) {
  if (typeof symbol !== "string" || typeof string !== "string") {
    return null;
  }

  let i = 0;
  let count = 0;

  string = string.toLowerCase;
  symbol = symbol.toLowerCase;
  while (true) {
    if ((string.indexOf[i] = symbol)) {
      count++;
    }
  }
  return result;
}

let count_symbol_result = count_symbol(25, 105);
console.log(count_symbol_result);
