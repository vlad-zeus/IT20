// тут все просто. Нам нужен первый город, поэтому мы его запрашиваем вне цикла.
// Эта переменная больше никогда не будет использоваться.
// Если мы внесем запрос города в цикл - нас будет спрашивать дважды город. А нам нужен только один, мы будем сравнивать с результатом работы предыдущего шага цикла.
let city = prompt('Введите название города');
//Вот это - я не понимаю зачем. Мы и так получаем строку из prompt. Можно выбросить.
city = String(city);
// Эта переменная необязательна. В ней всегда хранится 0, и ты ее потом приравниваешь к i, что равноценно let i = 0
// ТОже можно убрать.
let point = 0;
// Это пустая переменная для второго города.
// Мы ее объявляем вне цикла, потому что если мы напишем let city = prompt('Введите название города'); то будем лететь в ошибку на каждом шаге цикла,
// (вернее на втором) потому как переменная уже объявлена.
let city2;
// Вот тут две строчки можно объеденить. Чтобы было сразу и инициализация и присвоение. Тут мы получили последнюю букву первого города
let letter;
letter = city.slice(-1);
// Объявляем переменную для первой буквы второго города. По той же причине, если мы ее инициализируем в цикле то будем лететь в ошибку на каждом шаге цикла,
// // (вернее на втором) потому как переменная уже объявлена.
let first_letter;

//Это - кривое, не хочу разбираться почему не работает. Опять же, надо оборачивать в еще один цикл, или перегружать страницу, чтобы оно еще раз запрашивало город при неверном введении
if (Number(city)) {
    alert('Название города - число? Серьёзно?');
} else {
    // Объявили бесконечный цикл. По условиям, он никогда не достигнет конца выполнения, потому как i всегда больше или равно нулю.
    // i используем, как счетчик правильных ответов.
    for (let i = point; i >= 0; i++) {
        // Спросили последующий город.
        city2 = prompt('Введите название города');
        // ПОлучили первую букву последующего города
        first_letter = city2.slice(0, 1);
        // Сравниваем последнюю букву и первую букву городов. Буквы совпали
        if (letter === first_letter) {
            // И если они одинаковы - мы должны присвоить переменной letter ПОСЛЕДНЮЮ букву ПОСЛЕДНЕГО введенного города
            // ДЛЯ БУДУЩЕГО сравнения с ПЕРВОЙ буквой БУДУЩЕГО города. А будущий город будет на следующей итерации цикла
            letter = city2.slice(-1);
            // Тут просто. Счетчик правильных ответов.
            i = i + 1;
        // Буквы НЕ СОВПАЛИ
        } else {
            // Сообщение пользователю
            alert(`Игра окончена. Ваши очки: ${i}`);
            // ВЫход из цикла.
            break
        }
    }
}
