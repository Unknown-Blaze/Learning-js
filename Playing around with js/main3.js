let date = new Date();

const label = document.getElementById("date");
const dateTimer = setInterval(updateTime, 1000);

function updateTime(){
    date = new Date();
    
    label.innerHTML = formatTime(date);

    function formatTime(date){
        date = new Date()
        let hr = formatZeroes(date.getHours());
        let min = formatZeroes(date.getMinutes());
        let s = formatZeroes(date.getSeconds());
        let amOrPm = hr >= 12 ? "PM" : "AM";
        
        hr = (hr % 12) || 12;

        return `${hr} : ${min} : ${s} ${amOrPm}`;
    }
    function formatZeroes(time){
        if (String(time).length == 1){
            time = "0" + time;
        }
        return time;
    }

}

