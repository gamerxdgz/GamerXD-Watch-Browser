function openPage(url){

show("browser");

let frame=document.getElementById("page");

document.getElementById("loading")
.style.display="block";


frame.onload=()=>{

document.getElementById("loading")
.style.display="none";

};


frame.src=url;

addHistory(url);

}



function go(){

let url=document.getElementById("url").value;


if(!url.startsWith("http")){

url="https://"+url;

}


openPage(url);

}



function searchWeb(){

let q=document.getElementById("search").value;

openPage(
searchEngine(
"DuckDuckGo",
q
)
);

}



function back(){

page.contentWindow.history.back();

}



function forward(){

page.contentWindow.history.forward();

}



function reload(){

page.contentWindow.location.reload();

}
