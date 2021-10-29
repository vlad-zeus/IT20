let a = prompt("Введите число", "0");
let length_days = a.length;
let days;
let last_symbol;
alert(length_days);
if (length_days > 2) {
  alert("test");
  last_symbol = Number(a.slice(-2));
}
if (a >= 0 && a <= 20) {
  last_symbol = Number(a.slice(-2));
  if (last_symbol === 0 || (last_symbol >= 5 && last_symbol <= 20)) {
    days = "дней";
  } else if (last_symbol === 1) {
    days = "день";
  } else if (last_symbol >= 2 && last_symbol <= 4) {
    days = "дня";
  }
} else if (a >= 21 && a <= 99) {
  alert(a);
  last_symbol = Number(a.slice(-1));
  if (last_symbol === 0 || (last_symbol >= 5 && last_symbol <= 9)) {
    days = "дней";
  } else if (last_symbol === 1) {
    days = "день";
  } else if (last_symbol >= 2 && last_symbol <= 4) {
    days = "дня";
  }
}
alert(a + " " + days);
