let historyData=[];


function addHistory(url){

historyData.push(url);

}



function loadHistory(){

document.getElementById("historyList")
.innerHTML =
historyData.join("<br>");

}
