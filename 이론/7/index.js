//클릭하면 색깔 변화
const doc = document.querySelector("#title")

BASE_COLOR="red"
OTHER_COLOR="blue"

function handclick(){
    if (doc.style.color==BASE_COLOR){
        doc.style.color=OTHER_COLOR;
    }
    else{
        doc.style.color=BASE_COLOR;
    }
}


function normal(){
    doc.style.color=BASE_COLOR;
    doc.addEventListener("click", handclick);
}

normal();

//MDN 사이트에서 더 많은 이벤트 찾기