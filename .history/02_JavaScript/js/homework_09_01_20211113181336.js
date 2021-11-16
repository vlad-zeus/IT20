/* Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.*/

$(document).ready(function () {
  $(function create_container() {
    $('<div class="container"></div>')
      .css({
        margin: "0 auto!",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
      })
      .prependTo("body");
  });
  console.log(-2);
  $create_container();
  console.log(-1);

  $(function create_square(number, color, height, width) {
    console.log(0);
    /*        create_container();*/
    console.log(1);
    for (let i = 0; i < number; i++) {
      console.log(2);
      $('<div class="square"></div>')
        .css({
          height: height,
          width: width,
          "margin-top": "3px",
          "background-color": color,
        })
        .appendTo("div.container");
    }
    create_square(100, "#00aaff", "50px", "50px");
  });
});

/*function create_square(number, color, height, width) {
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
setTimeout(delete_all, 12000, '#000000');*/
