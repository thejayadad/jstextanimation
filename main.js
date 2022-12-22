
let txt = document.getElementById("text");

setInterval(changeColor, 1000);

function changeColor(){
    let r = Math.floor(Math.random() *255);
    let g = Math.floor(Math.random() *255);
    let b = Math.floor(Math.random() *255);

    txt.style.color = "RGB("+r+","+g+","+b+")";
}
changeColor();