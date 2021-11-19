//-----------------------------Голубые--------------------------------
function blocks(squareBlue) {
    let square = document.createElement('div');
    square.style.height = '70px';
    square.style.width = '70px';
    square.style.margin = '10px';
    square.style.background = '#00bfff';
    return square;
}
// ----------------------------Вывод--------------------------------
for (let i = 0; i < 1000; i++) {
    document.body.appendChild(blocks());
}
// ---------------------------Таймер--------------------------------

setTimeout(blocks, 2000, 1000);