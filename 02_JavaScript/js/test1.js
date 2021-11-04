let town = prompt('Укажите город', '');
console.log(town);
let town1;
let res = town.slice(-1).toLowerCase();
let res2;
let i = 0;
let temp_symbol = res;

console.log(res);

do {
    town1 = prompt("Укажите город", '');
    res2 = town1.slice(0, 1).toLowerCase();
    console.log(res2);
    res = temp_symbol;
    if (res === res2) {
        console.log(res, res2);
        temp_symbol = town1.slice(-1).toLowerCase();
        i++;
    }
} while (res === res2);
alert(`Игра окончена. Ваши очки: ${i}`);