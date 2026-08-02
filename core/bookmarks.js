let bookmarks=[

{
name:"GitHub",
url:"https://github.com"
},

{
name:"YouTube",
url:"https://youtube.com"
}

];


function loadBookmarks(){

document.getElementById("bookmarkList")
.innerHTML =
bookmarks.map(
b=>b.name+"<br>"
).join("");

}
