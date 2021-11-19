async function getResponse(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let content = await response.json();
    content = content.splice(0,100)

    let list = document.querySelector('.posts')

    let key;
    for(key in content) {
        list.innerHTML +=`<li class ="post">
<h4>${content[key].title}</h4>
</li>`
    }
}
getResponse();

//-----------------------------Пост----------------------------------

function blocks() {
    let square = document.createElement('div');
    square.style.border = '1px solid #bababa';
    square.style.height = '200px';
    square.style.width = '600px';
    square.style.margin = '10px';
    square.style.background = '#f0f0f0';
    square.innerHTML = 'userId: 1'
    return square;
}

// ----------------------------Вывод----------------------------------
for (let i = 0; i < 100; i++) {
    document.body.appendChild(blocks());
}