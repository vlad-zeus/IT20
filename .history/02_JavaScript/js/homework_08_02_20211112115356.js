/* Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.*/

function create_container() {
    let div = document.createElement('div');
    div.className = "container"
    div.style.margin = "0 auto!";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    document.body.append(div);
}

function create_square(number, color, height, width, div_class) {
    for (let i = 0; i < number; i++) {
        let div_square = document.createElement('div')
        div_square.className = div_class;
        div_square.style.height = height;
        div_square.style.width = width;
        div_square.style.marginBottom = "3px";
        div_square.style.backgroundColor = color;
        document.querySelector('.container').append(div_square);
    }
}

create_container();
create_square(1, '#00aaff', '250px', '50px', 'blue');
create_square(1, '#ffd400', '360px', '80px', 'yellow');

let first_elem = document.querySelector('.blue');
first_elem.addEventListener('mouseover', (event) => console.log(`Высота: ${first_elem.clientHeight}, ширина: ${first_elem.clientWidth}`));
first_elem.addEventListener('click', (event) => alert('Цвет прямоугольнка - голубой'));

let second_elem = document.querySelector('.yellow');
second_elem.addEventListener('mouseover', (event) => console.log(`Высота: ${second_elem.clientHeight}, ширина: ${second_elem.clientWidth}`));
second_elem.addEventListener('click', (event) => alert('Цвет прямоугольнка - желтый'));

