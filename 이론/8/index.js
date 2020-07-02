const doc = document.querySelector("#title")

const CLASS_CLICKED = "clicked";

function handclick(){
    const currentClass = doc.className;
    if (currentClass !== CLASS_CLICKED) {
        doc.className = CLASS_CLICKED;
    }
    else{
        doc.className = "";
    }
}

function init(){
    doc.addEventListener("click", handclick)
}

init()
