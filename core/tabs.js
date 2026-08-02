let tabs=[];


function newTab(){

let id=tabs.length+1;

tabs.push(
"Tab "+id
);


document.getElementById("tabs")
.innerHTML =
tabs.join(" | ");

}
