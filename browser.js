setTimeout(()=>{
document.getElementById("loading").style.display="none";
document.getElementById("app").style.display="block";
},2000);



function openSite(site){

document.getElementById("home").style.display="none";
document.getElementById("browser").style.display="block";

document.getElementById("viewer").innerHTML =
`
<h3>Opening...</h3>
<p>${site}</p>
`;

}



function go(){

let url=document.getElementById("url").value;

if(!url.startsWith("http")){
url="https://"+url;
}


openSite(url);

}



function settings(){

document.getElementById("home").style.display="none";
document.getElementById("settings").style.display="block";

}



function home(){

document.getElementById("settings").style.display="none";
document.getElementById("browser").style.display="none";
document.getElementById("home").style.display="block";

}



function darkMode(){

document.body.classList.toggle("light");

}
