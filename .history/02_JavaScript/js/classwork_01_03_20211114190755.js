/* Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.*/

function create_container() {
    let div = document.createElement("div");
    div.className = "container";
    div.style.margin = "0 auto!";
    div.style.display = "flex";
    div.style.flexDirection = "row";
    document.body.append(div);
    console.log("1");
}

function create_square(number, color, height, width) {
    create_container();
    for (let i = 0; i < number; i++) {
        let div_square = document.createElement("div");
        div_square.style.minHeight = height;
        div_square.style.minWidth = width;
        div_square.style.marginLeft = "3px"
        div_square.style.backgroundColor = color;
        div_square.className = "square";
        div_square.display = "flex";
        document.querySelector(".container").append(div_square);
        console.log("2");
    }
}

function replace_style_square_to_green_and_100px(color, height, width) {
    let elements = document.querySelectorAll(".square");
    for (let elem of elements) {
        elem.style.minHeight = height;
        elem.style.minWidth = width;
        elem.style.backgroundColor = color;
    }
}

function add_number() {
    let elements = document.querySelectorAll(".square");
    let i = 1;
    for (let elem of elements) {
        elem.innerHTML = '<p style="font-size:20%;">' + [i] + "</p>";
        i++;
    }
}

function replace_style_square_to_yellow_red(color1, color2, color3) {
    let elements = document.querySelectorAll(".square");
    let j = 1; //вот это, для того чтобы выбирать третий елемент. если же, нужно считать с нулевого (тогда первый объект будет красным, счетчик надо убрать. и в 44 строке сравнивать  с i)
    let k = 1;
    for (let i = 0; i < elements.length; i++) {
        if (j % 3 === 0) {
            elements[i].style.backgroundColor = color1;
        } else {
            elements[i].style.backgroundColor = color2;
        }
        j++;
    }
    for (let i = 0; i < elements.length; i++) {
        if (k % 15 === 0) {
            elements[i].style.background = `linear-gradient(to right bottom, transparent 50%, ${color3} 50%) left / 50% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, ${color3} 50%) right / 50% 100% no-repeat`
        }
        k++;
    }
    console.log("yellow_red");
}

function delete_all_red() {
    let elements = document.querySelectorAll(".square");
    let k = 1;
    for (let i = 0; i < elements.length; i++) {
        if (k % 3 === 0 && k % 15 !== 0) {
            elements[i].remove();
            console.log(k);
        }
        k++;
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

setTimeout(create_square, 2000, 1000, "#00aaff", "70px", "70px");
setTimeout(
    replace_style_square_to_green_and_100px,
    4000,
    "#8B00FF",
    "10px",
    "10px"
);
setTimeout(add_number, 6000);
setTimeout(
    replace_style_square_to_yellow_red,
    8000,
    "#fa0000",
    "#ffd400",
    "#78866b"
);

setTimeout(delete_all_red, 10000);
setTimeout(delete_all, 12000, '#000000');