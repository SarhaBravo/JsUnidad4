window.onlad = unit;

function init () {
    var element = document.getElementById("titulo");
     
    element.addEventListener("click", procesarClick);
}

function procesarClick() {
    console.log("Le dio click");
}