setTimeout(()=>{

document.getElementById("boot").style.display="none";

document.getElementById("app").style.display="block";

},2000);



setInterval(()=>{

let d=new Date();

document.getElementById("clock").innerHTML =
d.getHours()+":"+d.getMinutes();

},1000);



function show(section){

document.querySelectorAll("section")
.forEach(x=>x.style.display="none");

document.getElementById(section)
.style.display="block";

}


function showHome(){

show("home");

}


function showBookmarks(){

show("bookmarks");

loadBookmarks();

}


function showHistory(){

show("history");

loadHistory();

}


function showSettings(){

show("settings");

}



function toggleTheme(){

document.body.classList.toggle("light");

}
