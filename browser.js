setTimeout(()=>{

document.getElementById("boot").style.display="none";

document.getElementById("app").style.display="block";

},2000);



setInterval(()=>{

let d=new Date();

document.getElementById("clock").innerHTML =
d.getHours()+":"+d.getMinutes();

},1000);




function openPage(url){

document.getElementById("home").style.display="none";

document.getElementById("browser").style.display="block";


let frame=document.getElementById("frame");


document.getElementById("loading").style.display="block";


frame.onload=()=>{

document.getElementById("loading").style.display="none";

};


frame.src=url;

}



function search(){

let value=document.getElementById("search").value;


if(!value.startsWith("http")){

value=
"https://www.google.com/search?q="
+
encodeURIComponent(value);

}


openPage(value);

}



function home(){

document.getElementById("browser").style.display="none";

document.getElementById("settings").style.display="none";

document.getElementById("home").style.display="block";

}



function showSettings(){

document.getElementById("home").style.display="none";

document.getElementById("settings").style.display="block";

}



function theme(){

document.body.classList.toggle("light");

}



function back(){

document.getElementById("frame").contentWindow.history.back();

}



function forward(){

document.getElementById("frame").contentWindow.history.forward();

}



function reload(){

document.getElementById("frame").contentWindow.location.reload();

}
