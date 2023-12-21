const button = document.getElementById("bgcolor");
const label = document.getElementById("date");
const box = document.getElementById("box");
const table_element = document.querySelector("#text") 

button.onclick = setbg;

function getColor(){
    let color = [0, 0, 0]
    color = color.map(element => element = Math.floor(Math.random()*256))
    return color;
}

// button.addEventListener("click", () => {
//     let str = getColor();
//     document.body.style.backgroundColor = str;
//     document.getElementById("date").innerHTML = str;
// })

function setbg() {
    let color = getColor();
    let str = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    let brightness = (color[0]*0.299 + color[1]*0.587 + color[2]*0.114) / 256
    document.body.style.backgroundColor = str;
    label.innerHTML = brightness.toFixed(3) + " " + str;
    if (brightness < 0.5){
        document.body.style.color = "white";
        box.style.borderColor = "white";
    }else{
        document.body.style.color = "black";
        box.style.borderColor = "black";
    }
    
}

function inSquare(){
    box.textContent = "Inside box";
}
function clickSquare(){
    let click = setInterval(() => {
        box.textContent = "Clicked box";
    }, 1);  
    box.addEventListener("mouseup", function(){
        unclickSquare(click)
    })
}
function unclickSquare(click){
    clearInterval(click);
}
function leaveSquare(){
    box.textContent = "Outside box";
}

box.addEventListener("mousedown", clickSquare)
box.onmouseenter = inSquare;
box.onmouseleave = leaveSquare;