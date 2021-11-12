/* Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.*/

function create_container() {
    let div = document.createElement('div');
    div.className = "container"
    div.style.margin = "0 auto!";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    document.body.append(div);
}

function create_square(number, color, height, width) {
    create_container();
    for (let i = 0; i < number; i++) {
        let div_square = document.createElement('div')
        div_square.style.height = height;
        div_square.style.width = width;
        div_square.style.marginBottom = "3px";
        div_square.style.backgroundColor = color;
        div_square.className = "square";
        document.querySelector('.container').append(div_square);
    }
}

function replace_style_square_to_green_and_100px(color, height, width){
    let elements = document.querySelectorAll('.square');
    for (let elem of elements) {
        elem.style.height = height;
        elem.style.width = width;
        elem.style.backgroundColor = color;
    }
}

function replace_style_square_to_yellow_red(color1, color2){
    let elements = document.querySelectorAll('.square');
    let j = 1; //вот это, для того чтобы выбирать третий елемент. если же, нужно считать с нулевого (тогда первый объект будет красным, счетчик надо убрать. и в 44 строке сравнивать  с i)
    for (let i = 0; i < elements.length; i++) {
        if (j % 3 === 0) {
            elements[i].style.backgroundColor = color1;
        } else {
            elements[i].style.backgroundColor = color2;
        }
        j++;
    }
}

function delete_all(color) {
    let elements = document.querySelectorAll('.square');
    for (let elem of elements) {
        elem.remove();
    }
    document.querySelector('.container').remove();
    document.body.style.backgroundColor = color;
}

setTimeout(create_square,3000,10, '#00aaff', '50px', '50px');
setTimeout(replace_style_square_to_green_and_100px, 6000, '#008000', '100px', '100px');
setTimeout(replace_style_square_to_yellow_red, 9000, '#fa0000', '#ffd400');
setTimeout(delete_all, 12000, '#000000');

