const doc = document.querySelector("#title")

const CLASS_CLICKED = "clicked";

function handclick(){
    const hasClass = doc.classList.contains(CLASS_CLICKED);
    if (hasClass) {
        doc.classList.remove(CLASS_CLICKED);
    }
    else{
        doc.classList.add(CLASS_CLICKED)
    }
}

function init(){
    doc.addEventListener("click", handclick)
}

init()
