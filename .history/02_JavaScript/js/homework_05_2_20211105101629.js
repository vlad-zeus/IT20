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
    i++;
  }
  return result;
}

let count_symbol_result = count_symbol(
  "u",
  "Ut amet qui id deserunt nisi consectetur sint deserunt sit proident aliquip quis qui. Velit id qui pariatur aute fugiat id sunt dolor duis. Culpa do dolor non laboris et sit veniam est dolore duis ea. Ea veniam cillum cillum proident deserunt nostrud laboris sit in aliqua pariatur sit ex. Est dolore occaecat nostrud ipsum sunt magna laboris consequat dolor enim voluptate minim."
);
console.log(count_symbol_result);
