document.getElementById("increment").onclick = () => {
    var val = Number(document.getElementById("num").innerHTML);
    val += 1;
    document.getElementById("num").innerHTML = String(val);
}
document.getElementById("decrement").onclick = () => {
    var val = Number(document.getElementById("num").innerHTML);
    val -= 1;
    document.getElementById("num").innerHTML = String(val);
}
document.getElementById("reset").onclick = () => {

    document.getElementById("num").innerHTML = 0;
}

document.getElementById("submit").onclick = () => {

    let val = document.getElementById("set").value;
    if (!isNaN(+val) && Boolean(val)){
        if (val[0] == 0){
            var i = 0;
            while (val[i] == 0){
                i+=1;
            }
            val = val.substring(i);
        }
        
        
        document.getElementById("num").innerHTML = val;
    }
    document.getElementById("set").value = "";
        
}

document.getElementById("random").onclick = function(){

    document.getElementById("num").innerHTML = Math.ceil(Math.random()*100);
}
