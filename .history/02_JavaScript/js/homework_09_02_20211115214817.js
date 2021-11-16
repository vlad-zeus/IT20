/*Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.*/

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
    (create_square = function (number, color, height, width, div_class) {
      let color_in_word;
      if (color === "#00aaff") {
        color_in_word = "голубой";
      } else {
        color_in_word = "красный";
      }
      for (let i = 0; i < number; i++) {
        $('<div class="square"></div>')
          .css({
            height: height,
            width: width,
            "margin-top": "3px",
            "background-color": color,
          })
          .addClass(div_class)
          .mouseenter(function () {
            console.log(this.clientHeight, this.clientWidth);
          })
          .on("click", function (e) {
            alert(`Цвет прямоугольника - ${color_in_word}`);
          })
          .appendTo("div.container");
      }
    })
  );

  setTimeout(create_square, 0, 1, "#00aaff", "170px", "70px", "first_square");
  setTimeout(create_square, 0, 1, "#d21111", "70px", "720px", "second_square");
});
