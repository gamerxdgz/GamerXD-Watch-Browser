const engines={

Google:
"https://google.com/search?q=",

Bing:
"https://bing.com/search?q=",

DuckDuckGo:
"https://duckduckgo.com/?q=",

Brave:
"https://search.brave.com/search?q="

};



function searchEngine(name,text){

return engines[name]+
encodeURIComponent(text);

}
