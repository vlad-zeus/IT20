/*Зато сделал как хотел.*/
$(document).ready(function () {
    function create_container() {
        let div = document.createElement('div');
        div.className = "container"
        div.style.margin = "0 auto!";
        div.style.display = "flex";
        div.style.flexWrap = "wrap";
        div.style.flexDirection = "row";
        div.style.flexDirection = "row";
        div.justifyContent = "center";
        div.style.width = "490px";
        div.style.height = "490px";
        div.style.alignItems = "center";
        document.body.append(div);
    }

    function create_square(number, height, width) {
        create_container();
        for (let i = 1; i <= number; i++) {
            let div_square = document.createElement("div");
            div_square.style.minHeight = height;
            div_square.style.minWidth = width;
            div_square.className = "square" + i;
            div_square.style.display = "flex";
            div_square.style.position = "relative";
            div_square.style.alignItems = "center";
            div_square.style.justifyContent = "center";
            if (i === 4) {
                div_square.innerHTML = '<span style="font-size:150%; display: block; color: red">' + '12' + "<span>"
            }
            if (i === 10) {
                div_square.innerHTML = '<span style="font-size:100%;">' + '11' + "<span>"
                div_square.style.alignItems = "flex-start";
                div_square.style.justifyContent = "flex-start";
                div_square.style.alignContent = "flex-start";
            }
            if (i === 12) {
                div_square.innerHTML = '<span style="font-size:100%;">' + '1' + "<span>"
                div_square.style.alignItems = "flex-start";
                div_square.style.justifyСontent = "flex-end";
                div_square.style.placeContent = "flex-end";
            }
            if (i === 16) {
                div_square.innerHTML = '<span style="font-size:100%;">' + '10' + "<span>"
                div_square.style.alignItems = "flex-start";
                div_square.style.justifyContent = "flex-start";
                div_square.style.alignContent = "flex-start";
            }
            if (i === 20) {
                div_square.innerHTML = '<span style="font-size:100%;">' + '2' + "<span>"
                div_square.style.alignItems = "flex-start";
                div_square.style.justifyСontent = "flex-end";
                div_square.style.placeContent = "flex-end";
            }
            if (i === 22) {
                div_square.innerHTML = '<span style="font-size:150%; color: red"">' + '9' + "<span>"

            }
            if (i === 28) {
                div_square.innerHTML = '<span style="font-size:150%; ; color: red">' + '3' + "<span>"
            }
            if (i === 30) {
                div_square.innerHTML = '<span style="font-size:100%;">' + '8' + "<span>"
                div_square.style.alignItems = "flex-end";
                div_square.style.justifyContent = "flex-start";
            }
            if (i === 34) {
                div_square.innerHTML = '<span style="font-size:100%;">' + '4' + "<span>"
                div_square.style.alignItems = "flex-end";
                div_square.style.justifyContent ="flex-end";
            }
            if (i === 38) {
                div_square.innerHTML = '<span style="font-size:100%;">' + '7' + "<span>"
                div_square.style.alignItems = "flex-end";
                div_square.style.justifyContent = "flex-start";
            }
            if (i === 40) {
                div_square.innerHTML = '<span style="font-size:100%;">' + '5' + "<span>"
                div_square.style.alignItems = "flex-end";
                div_square.style.justifyContent ="flex-end";
            }
            if (i === 46) {
                div_square.innerHTML = '<span style="font-size:150%; color: red"">' + '6' + "<span>"
            }
            div_square.flex = "0 0";
            document.querySelector(".container").append(div_square);
            if (i === 25) {
                let div_hour = document.createElement("div");
                div_hour.style.minHeight = "150px";
                div_hour.className = "hour";
                div_hour.style.minWidth = "10px";
                div_hour.style.position = "absolute";
                div_hour.style.background = "black";
                div_hour.style.top = "-110px";
                div_hour.style.transformOrigin = "50% 100%";
                document.querySelector(".square25").append(div_hour);
                let div_minutes = document.createElement("div");
                div_minutes.style.minHeight = "200px";
                div_minutes.className = "minutes";
                div_minutes.style.minWidth = "5px";
                div_minutes.style.position = "absolute";
                div_minutes.style.background = "black";
                div_minutes.style.top = "-160px";
                div_minutes.style.transformOrigin = "50% 100%";
                document.querySelector(".square25").append(div_minutes);
                let div_second = document.createElement("div");
                div_second.style.minHeight = "220px";
                div_second.className = "second";
                div_second.style.minWidth = "3px";
                div_second.style.position = "absolute";
                div_second.style.background = "black";
                div_second.style.top = "-180px";
                div_second.style.transformOrigin = "50% 100%";
                document.querySelector(".square25").append(div_second);
            }
        }
    }
    create_square(49, "70px", "70px")
    const deg = 6;
    const degHR = 30;
    const hr = document.querySelector('.hour');
    console.log(hr);
    const mn = document.querySelector(".minutes");
    const sc = document.querySelector(".second");
    setInterval(() => {
        let day = new Date();
        let hh = ((day.getHours() % 12) + day.getMinutes() / 60) * degHR;
        console.log(hh);
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        hr.style.transform = `rotateZ(${hh}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    });


});
