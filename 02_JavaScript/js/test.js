function create_blue_sqares() {
    for(let i = 1; i <= 10; i++) {
        let a1 = document.createElement('div');
        a1.setAttribute('style', 'background: blue; width: 50px; height: 50px; margin: 10px');
        document.body.prepend(a1);
    }
}
setTimeout(create_blue_sqares, 3000);

// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
function create_green_sqares() {
    let search = document.getElementsByTagName('div');
    for(let i = 0; i < search.length; i++) {
        search[i].setAttribute('style', 'background: green; width: 100px; height: 100px; margin: 10px');
    }
}
setTimeout(create_green_sqares, 6000);

// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.

function create_multicolored_sqares() {
    let search = document.getElementsByTagName('div');
    console.log()
    for(let i = 0; i < search.length; i++) {
        if(i === 2 || i === 5 || i === 8) {
            search[i].setAttribute('style', 'background: red; width: 100px; height: 100px; margin: 10px');

        } else {
            search[i].setAttribute('style', 'background: yellow; width: 100px; height: 100px; margin: 10px');
        }
    }
}

setTimeout(create_multicolored_sqares, 9000);

// 4. Удалить все квадраты, и сделать фон страницы черным.

function delete_all() {
    let search = document.getElementsByTagName('div');
    let div_length = search.length;
    console.log(search.length);
    for(let i = (search.length - 1); i >= 0; i--) {
        console.log(i);
        console.log(search.length);
        search[i].remove();
    }
    document.body.style.backgroundColor = 'black';
}

setTimeout(delete_all, 12000);