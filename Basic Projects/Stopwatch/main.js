const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");
const lapList = document.querySelector("#lapList");
const warning = document.querySelector("#warningtext");

let startTime = 0;
let lastLappedTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let reset = true;
let intervalId;
let hours = 0;
let mins = 0;
let secs = 0;
let lapIntervalId;

// Only for laps
let pauseStart = 0;
let totalPauseTime = 0;

startBtn.addEventListener("click", () =>{
    if (reset){
        paused = false;
        reset = false;
        startTime = Date.now() - elapsedTime;
        lastLappedTime = Date.now();
        intervalId = setInterval(updateTime, 1);
        startBtn.textContent = "Lap";
        warning.textContent = "";
    }else if (!paused){
        
        let li = document.createElement("li");
        let content = document.createTextNode(updateLappedTime());
        li.appendChild(content);
        totalPauseTime = 0;
        pauseStart = 0;
        if (lapList.firstChild) {
            lapList.insertBefore(li, lapList.firstChild);
        } else {
            lapList.appendChild(li);
        }
        lastLappedTime = Date.now();
        warning.textContent = "";
    }else{
        warning.textContent = "Cannot lap while paused!";
    }
    
});
pauseBtn.addEventListener("click", () =>{
    if (!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
        pauseBtn.textContent = "Unpause";
        warning.textContent = "";
        pauseStart = Date.now();
    }else if (paused && !reset){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 100);
        pauseBtn.textContent = "Pause";
        totalPauseTime += Date.now() - pauseStart;
        warning.textContent = "";
    }else{
        warning.textContent = "Cannot pause while reset!";
    }
});
resetBtn.addEventListener("click", () =>{
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    paused = true;
    reset = true;
    clearInterval(intervalId);
    hours = 0;
    mins = 0;
    secs = 0;
    pauseStart = 0;
    totalPauseTime = 0
    timeDisplay.textContent = "00 : 00 : 00";
    startBtn.textContent = "Start";
    pauseBtn.textContent = "Pause";
    while (lapList.firstChild) {
        lapList.removeChild(lapList.firstChild);
    }
    warning.textContent = "";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = padZeroes(Math.floor((elapsedTime / 1000) % 60));
    mins = padZeroes(Math.floor((elapsedTime / (1000*60)) % 60));
    hours = padZeroes(Math.floor((elapsedTime / (1000*60*60)) % 60));

    timeDisplay.textContent = `${hours} : ${mins} : ${secs}`;

    function padZeroes(num){
        return num.toString().length === 1 ? "0"+num : num;
    }
}

function updateLappedTime(){
    let lapTime = Date.now() - lastLappedTime - totalPauseTime;

    let lapSecs = padZeroes(Math.floor((lapTime / 1000) % 60));
    let lapMins = padZeroes(Math.floor((lapTime / (1000 * 60)) % 60));
    let lapms = padZeroes(Math.floor((lapTime % 1000)));
    if (lapms.toString().length == 2){
        lapms = "0"+lapms;
    }
    let currentTime = elapsedTime; 
    let currSecs = padZeroes(Math.floor((currentTime / 1000) % 60));
    let currMins = padZeroes(Math.floor((currentTime / (1000 * 60)) % 60));
    let currHours = padZeroes(Math.floor((currentTime / (1000 * 60 * 60)) % 60));

    return `+${lapMins}:${lapSecs}.${lapms}  ${currHours}:${currMins}:${currSecs}`;

    function padZeroes(num){
        return num.toString().length === 1 ? "0"+num : num;
    }
}