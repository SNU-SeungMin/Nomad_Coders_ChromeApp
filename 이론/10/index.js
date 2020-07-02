const doc = document.querySelector("#title")

const CLASS_CLICKED = "clicked";

function handclick(){
    doc.classList.toggle(CLASS_CLICKED)
}

function init(){
    doc.addEventListener("click", handclick)
}

init()
