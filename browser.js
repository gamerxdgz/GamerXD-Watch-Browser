let history = [];
let position = -1;

function go() {

    let url = document.getElementById("url").value;

    if (!url.startsWith("http")) {
        url = "https://" + url;
    }

    let page = document.getElementById("page");

    page.src = url;

    history = history.slice(0, position + 1);
    history.push(url);
    position++;

}


function back() {

    if(position > 0){

        position--;
        document.getElementById("page").src = history[position];

    }

}


function forward(){

    if(position < history.length - 1){

        position++;
        document.getElementById("page").src = history[position];

    }

}


function refresh(){

    document.getElementById("page").src =
    document.getElementById("page").src;

}
