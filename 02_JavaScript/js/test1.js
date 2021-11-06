let text = 'Иванов Сергей Петрович';
function get_short_fio(full_fio) {
    let fio = text.split(' ');
    console.log(fio);
    let short_fio = text[0] + text[1].slice(0, 1) + "." +text[2].slice(0, 1) + ".";
    return short_fio
}
console.log(get_short_fio());