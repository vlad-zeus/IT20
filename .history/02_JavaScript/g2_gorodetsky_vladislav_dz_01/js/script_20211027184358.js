function compute_age(x) {
  return Math.floor((new Date() - x) / (1000 * 3600 * 24 * 365.25));
}

function format_date(d) {
  return d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
}

const NAME = "Владислав";
const SURNAME = "Городецкий";
const DATE_OF_BIRTH = new Date(1979, 11, 26);
let age = compute_age(DATE_OF_BIRTH);
let sex = "мужской";
let height = "181 см";
let weight = "129 кг";
const COLOR_OF_EYES = "зеленый";
let family_status = "женат";
let child = 1;
let animals = "кошка";
let profession = "системный администратор, DBA";
let favorite_music_style = "power metal, trash metal, industrial, darkwave";
let favorite_sport =
  "силовой тренинг - для себя, Formula1, снукер - посмотреть";
let hobby = "почитать книгу";

console.log(
  "Имя: " + NAME,
  "\n" + "Фамилия: " + SURNAME,
  "\n" + "Дата рождения: " + format_date(DATE_OF_BIRTH),
  "\n" + "Возраст: " + age,
  "\n" + "Пол: " + sex,
  "\n" + "Рост: " + height,
  "\n" + "Вест: " + weight,
  "\n" + "Цвет глаз: " + COLOR_OF_EYES,
  "\n" + "Семейное положение: " + family_status,
  "\n" + "Дети: " + child,
  "\n" + "Животные: " + animals,
  "\n" + "Профессия: " + profession,
  "\n" + "Музыкальные предпочтения: " + favorite_music_style,
  "\n" + "Спорт: " + favorite_sport,
  "\n" + "Хобби: " + hobby
);
