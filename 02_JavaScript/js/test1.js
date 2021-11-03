let town = prompt('Укажите город', '');
console.log(town);
let town1;
let res = town.slice(-1)
let res2;
let i = 0;

console.log(res);

do {
    town1 = prompt("Укажите город", '');
    res2 = town1.slice(0, 1);
    console.log(res2);
    if (res === res2) {
        console.log(res, res2);
        res = town1.slice(-1);
        i++;
    } else {
        break
    }
} while (i != 0);
alert(`Игра окончена. Ваши очки: ${i}`);