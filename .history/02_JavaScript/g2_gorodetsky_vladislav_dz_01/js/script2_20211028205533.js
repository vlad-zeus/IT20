let a = prompt("Введите число", "0");
let length_days = a.length;
let days;
if (length_days <= 2) {
    
}



if (a >= 0 && a <= 20) {
  let last_symbol = Number(a.slice(-2));
  alert(last_symbol);
  if (last_symbol === 0 || (last_symbol >= 5 && last_symbol <= 20)) {
    days = "дней";
  } else if (last_symbol === 1) {
    days = "день";
  } else if (last_symbol >= 2 && last_symbol <= 4) {
    days = "дня";
  }

alert(a + " " + days);
