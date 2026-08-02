function go() {
    let url = document.getElementById("url").value;

    if (!url.startsWith("http")) {
        url = "https://" + url;
    }

    window.open(url, "_blank");
}


function back() {
    history.back();
}


function forward() {
    history.forward();
}


function refresh() {
    location.reload();
}
