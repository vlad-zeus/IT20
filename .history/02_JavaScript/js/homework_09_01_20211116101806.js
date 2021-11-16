/* Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.*/

$(document).ready(function () {
    $(
        (create_container = function () {
            $('<div class="container"></div>')
                .css({
                    margin: "0 auto!",
                    display: "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                })
                .prependTo("body");
        })
    );

    $(
        (create_square = function (number, color, height, width) {
            for (let i = 0; i < number; i++) {
                $('<div class="square"></div>')
                    .css({
                        height: height,
                        width: width,
                        "margin-top": "3px",
                        "background-color": color,
                    })
                    .appendTo("div.container");
            }
        })
    );

    $(
        (replace_square_color_to_purple = function (color, height, width) {
            $(".square").css({
                height: height,
                width: width,
                "background-color": color,
            });
        })
    );

    $(
        (add_number = function () {
            $(".square")
                .each(function (index, element) {
                    element.innerHTML =
                        '<span style="font-size: 40px; color: white">' +
                        (index + 1) +
                        "</span>";
                })
                .css({
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center",
                });
        })
    );

    $(
        (replace_square_color_3_to_red_khaki_yellow = function (
            color1,
            color2,
            color3
        ) {
            $(".square").each(function (index, element) {
                if ((index + 1) % 3 === 0) {
                    $(element).css({
                        "background-color": color1,
                    });
                }
                if (
                    (index + 1) % 3 !== 0 &&
                    (index + 1) % 15 !== 0 &&
                    index <= 6
                ) {
                    $(element).css({
                        "background-color": color3,
                    });
                }
                if ((index + 1) % 15 === 0) {
                    $(element).css({
                        background: `linear-gradient(to right bottom, transparent 50%, ${color2} 50%) left / 50% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, ${color2} 50%) right / 50% 100% no-repeat`,
                    });
                }
            });
        })
    );

    $(
        (remove_color_square = function (color) {
            $(".square")
                .filter(function () {
                    return $(this).css("background-color") === color;
                })
                .remove();
        })
    );

    setTimeout(create_square, 2000, 100, "#00aaff", "70px", "70px");
    setTimeout(
        replace_square_color_to_purple,
        4000,
        "#69069a",
        "100px",
        "100px"
    );
    setTimeout(add_number, 6000);
    setTimeout(
        replace_square_color_3_to_red_khaki_yellow,
        8000,
        "#FA0000FF",
        "#70744E",
        "#FFD400FF"
    );
    setTimeout(remove_color_square, 10000, "rgb(250, 0, 0)");
});
