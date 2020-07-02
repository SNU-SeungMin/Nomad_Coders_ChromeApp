const doc = document.querySelector("#title")

function handclick(){
    doc.style.color="red"
}

title.addEventListener("click", handclick)

function handresize(event){
    console.log(event);
}

window.addEventListener("resize", handresize);
