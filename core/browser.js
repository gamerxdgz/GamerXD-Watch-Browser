let currentURL = "";


function openPage(url){

currentURL = url;

show("browser");


let loader =
document.getElementById("loading");


let frame =
document.getElementById("page");


loader.style.display="block";


frame.style.display="none";


frame.src=url;



frame.onload=function(){

loader.style.display="none";

frame.style.display="block";

};



frame.onerror=function(){

showBlocked(url);

};


addHistory(url);

}




function showBlocked(url){

document.getElementById("loading")
.style.display="none";


document.getElementById("page")
.style.display="block";


document.getElementById("page")
.srcdoc = `

<html>

<body style="
font-family:Arial;
text-align:center;
padding:30px;
">

<h2>⚠️ Website Blocked</h2>

<p>
This website does not allow embedding.
</p>

<p>
Open it in a real browser engine.
</p>

<button onclick="window.open('${url}')">
Open Website
</button>

</body>

</html>

`;

}



function go(){

let url =
document.getElementById("url").value;


if(!url.startsWith("http")){

url="https://"+url;

}


openPage(url);

}



function searchWeb(){

let q =
document.getElementById("search").value;


openPage(
"https://duckduckgo.com/?q="
+
encodeURIComponent(q)
);

}



function back(){

history.back();

}



function forward(){

history.forward();

}



function reload(){

openPage(currentURL);

}
