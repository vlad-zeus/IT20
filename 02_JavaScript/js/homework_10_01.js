/*С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных)
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.*/

/*Я не понимаю, почему не происходит удаление дива. Я повесил функцию, но постоянно улетаю в ошибку. Как отладить это - я не знаю*/

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
                //calendar_events = JSON.stringify(json.items);
                //console.log(json);
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
                    page_content = page_content + `<div id = "${id}" class="${id}" style ="color: #1B2E4D; margin: 10px; display: flex; flex-direction: column; align-items: center; min-height: 150px"><H3>${summary}</H3>\n
                           <div class="image_div"><img src="img/image.png" alt="main_photo"></div>
                           <div class="date_start" style="display: flex; flex-direction: row">
                                <div class="date" style="width: 150px"><h6 align="left">Дата начала: ${date_start}</h6></div>
                                <div class="time" style="width: 150px"><h6 align="right">Время начала: ${time_start}</h6></div>
                           </div>
                           <div class="date_end" style="display: flex; flex-direction: row">
                                <div class="date" style="width: 150px"><h6 align="left">Дата окончания: ${date_end}</h6></div>
                                <div class="time"style="width: 150px"><h6 align="right">Время окончания: ${time_end}</h6></div>
                           </div>

                           <button type="button" name="show_more" style="margin: 10px" onclick="alert('${id}, ${summary}, ${date_start}, ${time_start}, ${location}, ${htmlLink}')">Показать данные</button>
                           <button type="button" name="delete" style="margin: 10px" onclick="javascript: delete_div(${id});">Удалить</button>

                           </div>`
                })
                page_content = $(page_content).appendTo("div.container")
            });
    }

    get_calendar_event('vgorodetsky@gmail.com','AIzaSyCWGk2otBltS3FbSdEEimN4FypzUGokk3Q','2021-10-03T10:00:00-07:00', '2021-12-31T10:00:00-07:00');

    function delete_div(id) {
        console.log("test");
        document.getElementById(id).remove();
    }


});
