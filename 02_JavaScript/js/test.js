$(document).ready(function blocks(squareBlue) {
    for (let i = 0; i < 100; i++) {
        $('<div></div>').css({
            'height': '70px',
            'width': '70px',
            'background': '#0091ff',
            'margin': '10px'
        }).appendTo('body');
    }


    function  blocks2 (squarePurple) {
        let elements = $('div');
            elements.css({
            'height' : '100px',
            'width' : '100px',
            'background' : '#800080',
            'margin': '10px'
        });

    }
    setTimeout(blocks2, 4000, 1000);
})