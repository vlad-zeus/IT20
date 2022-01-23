/*С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных)
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.*/

$(document).ready(function () {

    $(create_container = function () {
        $('<div class="container"></div>')
            .css({
                "width": "1400px",
                "margin": "0 auto!",
                "display": "flex",
                "flex-direction": "row",
                "align-items": "center",
                "flex-flow": "row wrap",
            })
            .prependTo("body");
    });

    let page_content = '';

    async function get_calendar_event(email, api_key, min_date, max_date) {
        fetch(`https://www.googleapis.com/calendar/v3/calendars/${email}/events?key=${api_key}&singleEvents=true&orderBy=starttime&timeMin=${min_date}&timeMax=${max_date}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                json.items.forEach(one_event => {
                    let summary = one_event.summary;
                    let created = one_event.created;
                    let date_start = (((one_event.start).dateTime).split("T"))[0];
                    let time_start = (((one_event.start).dateTime).split("T"))[1].slice(0, 8);
                    let date_end = (((one_event.end).dateTime).split("T"))[0];
                    let time_end = (((one_event.end).dateTime).split("T"))[1].slice(0, 8);
                    let location = one_event.location;
                    let htmlLink = one_event.htmlLink;
                    let id = one_event.id;
                    page_content += `<div id = "${id}" class="${id}" style ="color: #1B2E4D; background: #9dc1d3; margin: 10px; display: flex; flex-direction: column; align-items: center; min-height: 150px"><H3>${summary}</H3>\n
                           <div class="image_div"><img src="img/image.png" alt="main_photo"></div>
                           <div class="date_start" style="display: flex; flex-direction: row; flex-wrap: wrap; width: 300px;">
                                <div class="date" style="width: 150px"><h6 align="center">Дата начала: ${date_start}</h6></div>
                                <div class="time" style="width: 150px"><h6 align="center">Время начала: ${time_start}</h6></div>
                                <div class="adress" style="width: 300px"><h6 align="center">Адрес: ${location}</h6></div>
                           </div>
                           <div class="date_end" style="display: flex; flex-direction: row">
                                <div class="date" style="width: 150px"><h6 align="center">Дата окончания: ${date_end}</h6></div>
                                <div class="time"style="width: 150px"><h6 align="center">Время окончания: ${time_end}</h6></div>
                           </div>
                           <div class="button_div" style="display: flex; flex-direction: row; flex-wrap: wrap;">                          
                                <button type="button" name="show_more" style="margin: 10px" onclick="alert('${id}, ${summary}, ${date_start}, ${time_start}, ${location}, ${htmlLink}')">Показать данные</button>
                                <button type="button" name="delete" style="margin: 10px" onclick="document.getElementById('${id}').remove();">Удалить</button></div>
                           </div>
                           </div>`
                })
                page_content = $(page_content).appendTo("div.container")
            });
    }

    get_calendar_event('vgorodetsky@gmail.com', 'AIzaSyCWGk2otBltS3FbSdEEimN4FypzUGokk3Q', '2021-10-03T10:00:00-07:00', '2021-12-31T10:00:00-07:00');
});
