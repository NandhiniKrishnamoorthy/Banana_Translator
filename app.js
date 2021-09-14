var buttontrans = document.querySelector("#btntranslate");

var txtinputarea = document.querySelector("#txtarea");

var outputtextarea = document.querySelector("#outputtext");



buttontrans.addEventListener("click", function clickEvent() {
    console.log("Clicked!");
    //console.log(txtinputarea.value);
    outputtextarea.innerText = "Welcome Good morning";
})