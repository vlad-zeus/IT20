/*const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_work_days(date1, date2) {
    console.log(date1);
    console.log(date2);
    // let a = date1.getDay();
    // console.log(a)

    let date1_ms = date1.getTime();
    console.log(date1_ms)
    let date2_ms = date2.getTime();
    console.log(date2_ms)
    let work_days = 0;
    //
    //
    for (let i = date1_ms; i <= date2_ms; i = i + MS_DAY) {
        console.log('цикл первый ' + i);
        i = new Date(i);
        console.log('цикл второй ' + i)
        let day_of_week = i.getDay();
        console.log('цикл третий ' + day_of_week)
        if (day_of_week < 6 && day_of_week !== 0) {
            work_days++;
            console.log('цикл иф ' + i)
            console.log('цикл иф ' + date2_ms)
        } else {
            continue
        }
    }
    return work_days;
}

let date_3 = new Date('2010-11-08');
let date_4 = new Date('2010-12-31');

console.log(get_count_work_days(date_3, date_4));*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_work_days(date1, date2) {
    console.log(date1);
    console.log(date2);
    // let a = date1.getDay();
    // console.log(a)

    let date1_ms = date1.getTime();
    console.log(date1_ms)
    let date2_ms = date2.getTime();
    console.log(date2_ms)
    let work_days = 0;
    //
    //
    for (let i = date1_ms; i <= date2_ms; i = i + MS_DAY) {
        console.log('цикл первый ' + i);
        i = new Date(i).getTime();
        console.log('цикл второй ' + i)
        let day_of_week = new Date(i).getDay();
        console.log('цикл третий ' + day_of_week)
        if (day_of_week < 6 && day_of_week !== 0) {
            work_days++;
            console.log('цикл иф ' + i)
            console.log('цикл иф ' + date2_ms)
        } else {
            continue
        }
    }
    return work_days;
}

let date_3 = new Date('2010-11-08');
let date_4 = new Date('2010-12-31');

console.log(get_count_work_days(date_3, date_4));
