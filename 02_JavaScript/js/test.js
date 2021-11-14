let square = document.createElement('div');


function blocks(squareBlue) {
    let square = document.createElement('div');
    square.style.height = '50px';
    square.style.width = '50px';
    square.style.margin = '10px';
    square.style.background = '#0000FF';
    return square;
}



function blocks2(squareGreen) {
    let square2 = document.body.appendChild(blocks());

    square2.style.height = '100px';
    square2.style.width = '100px';
    square2.style.background = '#008000';

    return square2;
}

let i = 0;

function blocks3(index) {
    let square3 = document.body.appendChild(blocks2());
    console.log(square3);
    console.log(index);
    console.log(square3[index]);
    if (index % 3 === 0) {
        square3[index].style.background = '#FF0000';
    } else {
        square3[index].style.background = '#FFFF00';
    }

    return square3;
}

// setTimeout(blocks, 3000);
// setTimeout(blocks2, 6000);
// setTimeout(blocks3, 9000);



for (let i = 0; i < 10; i++) {
    document.body.appendChild(blocks());
}
for (let i = 0; i < 10; i++) {
    document.body.appendChild(blocks2());
}
for (let i = 0; i < 10; i++) {
    document.body.appendChild(blocks3(i));
}