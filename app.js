var buttontrans = document.querySelector("#btntranslate");
var txtinputarea = document.querySelector("#txtarea");
var outputtextarea = document.querySelector("#outputtext");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function findurl(inputtext) {
    var url = serverURL + "?" + "text=" + inputtext;
    return url;
}



buttontrans.addEventListener("click", function clickEvent() {    
    text = txtinputarea.value;
    fetch(findurl(text))
        .then(response => response.json())
        .then(json => {
            outputtextarea.innerText = json.contents.translated;
        })
})