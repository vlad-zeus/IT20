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
const sex = "мужской";
let height = "181 см";
let weight = "129 кг";
const COLOR_OF_EYES = "зеленый";
let family_status = "женат";
let child = 1;
let animals = "кошка";
let profession = "системный администратор, DBA";
let favorite_music_style = "power metal, trash metal, industrial, darkwave";
let favorite_sport = "силовой тренинг - для себя, Formula1, снукер - посмотреть";
let hobby = "прочтение книги";

console.log(
    "Имя: " + "\t" + "\t" + "\t" + NAME,
    "\n" + "Фамилия: " + "\t" + "\t" + SURNAME,
    "\n" + "Дата рождения: " + "\t" + "\t" + format_date(DATE_OF_BIRTH),
    "\n" + "Возраст: " + "\t" + "\t" + age,
    "\n" + "Пол: " + "\t" + "\t" + "\t" + sex,
    "\n" + "Рост: " + "\t" + "\t" + "\t" + height,
    "\n" + "Вес: " + "\t" + "\t" + "\t" + weight,
    "\n" + "Цвет глаз: "  + "\t"  + "\t" + COLOR_OF_EYES,
    "\n" + "Семейное положение: " + "\t" + family_status,
    "\n" + "Дети: " + "\t" + "\t" + "\t" + child,
    "\n" + "Животные: " + "\t" + "\t" + animals,
    "\n" + "Профессия: " + "\t" + "\t" + profession,
    "\n" + "Предпочитаемая музыка: " + "\t"  + favorite_music_style,
    "\n" + "Спорт: " + "\t" + "\t" + "\t" + favorite_sport,
    "\n" + "Хобби: " + "\t" + "\t" + "\t" + hobby
);

alert(
    "Имя:" + NAME +
    "\n" + "Фамилия: " + SURNAME +
    "\n" + "Дата рождения: " + format_date(DATE_OF_BIRTH) +
    "\n" + "Возраст: " + age +
    "\n" + "Пол: " + sex +
    "\n" + "Рост: " + height +
    "\n" + "Вес: " + weight +
    "\n" + "Цвет глаз: " + COLOR_OF_EYES +
    "\n" + "Семейное положение: " + family_status +
    "\n" + "Дети: " + child +
    "\n" + "Животные: " + animals +
    "\n" + "Профессия: " + profession +
    "\n" + "Музыкальные предпочтения: " + favorite_music_style +
    "\n" + "Спорт: " + favorite_sport +
    "\n" + "Хобби: " + hobby
);
