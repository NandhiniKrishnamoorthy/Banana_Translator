var buttontrans = document.querySelector("#btntranslate");

var txtinputarea = document.querySelector("#txtarea");


buttontrans.addEventListener("click", function clickEvent() {
    console.log("Clicked!");
    console.log(txtinputarea.value);
})