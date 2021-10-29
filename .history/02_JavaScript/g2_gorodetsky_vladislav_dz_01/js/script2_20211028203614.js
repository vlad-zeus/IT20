let a = prompt("Введите число", "0");
let length_days = a.length;
let last_symbol = a.slice(-1);
let days;
alert(length_days + last_symbol);
if (length_days === 1) {
  if (last_symbol === 0 || (last_symbol >= 5 && last_symbol <= 9)) {
    days = "дней";
  } else if (last_symbol === 1) {
    days = "день";
  } else if (last_symbol >= 2 && last_symbol <= 4) {
    days = "дня";
  }
}
alert(a + " " + days);
