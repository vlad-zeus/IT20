/*С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных)
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.*/

$(document).ready(function () {

        $(create_container = function () {
            $('<div class="container"></div>')
                .css({
                    "margin": "0 auto!",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                })
                .prependTo("body");
        });

        function get_calendar_event(date1, date2) {
            let link = fetch(`https://www.googleapis.com/calendar/v3/calendars/vgorodetsky@gmail.com/events?key=AIzaSyCWGk2otBltS3FbSdEEimN4FypzUGokk3Q&singleEvents=true&orderBy=starttime&timeMin=${date1}&timeMax=${date2}`)
            console.log(JSON.stringify(link));
        }
    get_calendar_event('2021-10-03T10:00:00-07:00', '2021-12-31T10:00:00-07:00');
    });
